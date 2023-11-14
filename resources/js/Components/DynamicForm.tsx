import { useForm } from "@inertiajs/react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { FormEventHandler, PropsWithChildren, ReactNode, useState } from "react";
import InputError from "./InputError";
import ChoiceSelect from "./ChoiceSelect";
import PrimaryButton from "./PrimaryButton";
import { cn, translate as tr } from "@/utils";
import Checkbox from "./Checkbox";
import Collapsable from "./Collapsable";
import ImageSelector from "./ImageSelector";
import DangerButton from "./DangerButton";


function canShow(input: FormInput, data: Record<string, any>) {
    return (!input.showIf || input.showIf.inValues.includes(data[input.showIf.targetInput]))
}

// Flattens the form inputs into a inputName -> value map
function reduceFormInputs(previous: Record<string, any>, current: FormInput | FormGroup): Record<string, any> {
    if ('inputs' in current) {
        return current.inputs.reduce(reduceFormInputs, previous)
    }
    else {
        return { ...previous, [current.name]: current.value }
    }
}

interface FormGroup {
    name: string,
    inputs: FormInput[],
}

export type DynamicFormInputs = (FormInput | FormGroup)[]

export interface FormInput {
    name: string,
    value: string | number | boolean  | any | undefined,
    showIf?: {targetInput: string, inValues: string[]},
    type?: 'text' | 'checkbox' | 'imageselect' | 'number' | 'textarea' | 'file' | 'datetime-local' | 'date' | 'email' | 'password',
    multiple?: boolean,
    accept?: string,
    hideLabel?: boolean,
    choices?: Record<string, string>,
}

interface DynamicInputProps {
    input: FormInput,
    value: any,
    errors: Partial<Record<string, string>>,
    setData: (key: string, value: any) => void,
    onChange?: (input: FormInput, value: any) => void,
}

function DynamicInput({ input, setData, onChange, value, errors }: DynamicInputProps) {

    return (
        <div className={cn(input.type == 'checkbox' ? 'flex items-center justify-end flex-row-reverse' : '')}>

            {!input.hideLabel &&
                <InputLabel htmlFor={input.name} value={tr(input.name)} />
            }

            {
                input.choices ?
                    <ChoiceSelect
                        className="w-full"
                        value={value ?? ''}
                        choices={input.choices}
                        onChange={(e) => {
                            setData(input.name, e.target.value)
                            if(onChange){
                                onChange(input, e.target.value)
                            }
                        }}
                    /> :
                input.type == 'imageselect'?
                    <ImageSelector
                        images={value}
                        onChange={(images) => {
                            setData(input.name, images)
                            if(onChange){
                                onChange(input, images);
                            }
                        }}
                    /> :
                input.type == 'checkbox' ?
                    <Checkbox
                        autoComplete="new-password"
                        name={input.name}
                        checked={value}
                        className="block mr-2 h-5 w-5"
                        onChange={(e) => {
                            setData(input.name, e.target.checked)
                            if(onChange){
                                onChange(input, e.target.checked)
                            }
                        }}
                    /> :
                input.type == 'textarea'?
                    <textarea
                        value={value}
                        onChange={(e) => {
                            setData(input.name, e.target.value)
                            if(onChange){
                                onChange(input, e.target.value)
                            }
                        }}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm w-full"
                        rows={5}
                    >
                    </textarea> :
                input.type == 'file' ?
                    <input
                        type={input.type ?? 'text'}
                        autoComplete="new-password"
                        name={input.name}
                        multiple={input.multiple ?? false}
                        accept={input.accept ?? '*'}
                        className="mt-1 pr-4 w-full border border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm cursor-pointer file:px-4 file:py-2 file:rounded-r-none file:bg-gray-800 file:border file:border-transparent file:rounded-md file:font-semibold file:text-white file:uppercase file:tracking-widest file:hover:bg-gray-700 file:hover:cursor-pointer file:focus:bg-gray-700 file:active:bg-gray-900 file:focus:outline-none focus:ring-2 file:focus:ring-orange-500 file:focus:ring-offset-2 file:transition file:ease-in-out file:duration-150"
                        onChange={(e) => {
                            if (e.target.files && e.target.files != null) {
                                const files = e.target.files
                                setData(input.name, input.multiple? files : files[0])
                                if(onChange){
                                    onChange(input, input.multiple? files: files[0])
                                }
                            }
                        }}
                    /> :
                    <TextInput
                        type={input.type ?? 'text'}
                        autoComplete="new-password"
                        name={input.name}
                        value={value ?? ''}
                        className="mt-1 block w-full"
                        onChange={(e) => {
                            setData(input.name, e.target.value)
                            if(onChange){
                                onChange(input, e.target.value)
                            }
                        }}
                    />
            }

            {Object.keys(errors).map((key) => {
                if (key.startsWith(input.name)) {
                    return <InputError message={errors[key]} className="mt-2" />;
                }
                return null;
            })}
        </div>
    )
}

interface DynamicFormGroupProps {
    group: FormGroup,
    data: Record<string, any>,
    errors: Partial<Record<string, string>>,
    collapsable: boolean,
    setData: (key: string, value: any) => void,
    onChange?: (input: FormInput, value: any) => void,
}

function DynamicFormGroup({ group, collapsable, data, setData, onChange, errors }: DynamicFormGroupProps) {
    return (
        <>
            {collapsable ?
                <Collapsable title={group.name}>
                    {group.inputs.map((input, index) => (
                        canShow(input, data) ?
                        <DynamicInput
                            key={`Group_${group.name}@Input_${input.name}@${index}`}
                            input={input}
                            value={data[input.name]}
                            errors={errors}
                            setData={setData}
                            onChange={onChange}
                        />
                        : <></>
                    ))}
                </Collapsable>
                :
                group.inputs.map((input, index) => (
                    canShow(input, data) &&
                    <DynamicInput
                        key={`Group_${group.name}@Input_${input.name}@${index}`}
                        input={input}
                        value={data[input.name]}
                        errors={errors}
                        setData={setData}
                        onChange={onChange}
                    />
                ))
            }
        </>
    )
}

interface DynamicFormProps extends PropsWithChildren {
    submitUrl: string,
    method: 'post' | 'put' | 'patch',
    inputs: DynamicFormInputs,
    multistep?: boolean,
    onChange?: (input: FormInput, value: any) => void,
}

export default function DynamicForm({ inputs, submitUrl, method, multistep, children, onChange }: DynamicFormProps) {
    const initialValues = inputs.reduce(reduceFormInputs, {} as Record<string, any>)
    const { data, setData, post, patch, put, processing, errors, reset } = useForm(initialValues);

    const steps = inputs.filter(i => 'inputs' in i) as FormGroup[];
    const [activeStep, setActiveStep] = useState(steps[0]);

    const submit= () => {
        if (method == 'post') {
            post(submitUrl)
        }
        else if (method == 'patch') {
            patch(submitUrl)
        }
        else if (method == 'put') {
            put(submitUrl)
        }
    }

    const handleStep = (back = false) => {
        let nextStepIndex = steps.indexOf(activeStep) + (back ? -1 : 1)
        nextStepIndex = Math.max(0, Math.min(nextStepIndex, steps.length - 1))
        setActiveStep(steps[nextStepIndex])
    }

    const changeStep = (step: FormGroup) => {
        const stepIndex = steps.indexOf(step)
        setActiveStep(step);
    }

    const isLastStep = () => {
        return steps.indexOf(activeStep) >= steps.length - 1
    }

    return (
        <>
            {multistep &&
                <div className="flex items-center justify-between mb-4 relative z-0">
                    <div className="border border-gray-400 w-full absolute left-0 top-4 -z-10"></div>
                    {steps.map((group, index) => (
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                className={cn("mb-0 rounded-full border-2 border-gray-400-500 bg-white w-8 h-8", activeStep.name == group.name ? 'border-orange-500 text-orange-500' : 'text-gray-400')}
                                onClick={() => changeStep(group)}
                            >
                                <h1 className={cn("text-lg font-bold")}>{index + 1}</h1>
                            </button>
                            <span className={cn("mt-2 hidden md:block", activeStep.name == group.name ? 'text-orange-500' : 'text-gray-300')}>{group.name}</span>
                        </div>
                    ))}
                </div>
            }
            <div className="rounded-lg px-4 py-4 bg-white shadow-lg">
                <form method={method} encType="multipart/form-data">
                    <div className="space-y-4">
                        {/* Render inputs but filter out the inactive InputGroups but only if the form is multistep */}
                        {inputs.filter(i => !('inputs' in i && multistep && activeStep.name != i.name)).map((input, index) => (
                            ('inputs' in input) ?
                                <DynamicFormGroup
                                    collapsable={true}
                                    key={`${input.name}_Group@${index}`}
                                    data={data} errors={errors}
                                    group={input} setData={setData}
                                    onChange={onChange}
                                />
                                :
                                canShow(input, data) && <DynamicInput onChange={onChange} key={`${input.name}_Input@${index}`} input={input} value={data[input.name]} errors={errors} setData={setData} />
                        ))}
                    </div>
                    {children}
                    <div className="flex items-center justify-between mt-8 border-t pt-3">
                        {multistep &&
                            <DangerButton type="button" onClick={() => handleStep(true)}>
                                {tr('Previous')}
                            </DangerButton>
                        }
                        {multistep && !isLastStep() ?
                            <PrimaryButton
                                id="next_button"
                                onClick={() => handleStep()}
                                type={'button'}
                                disabled={processing}
                            >
                                {tr('Next')}
                            </PrimaryButton>
                            :
                            <PrimaryButton
                                id="submit_button"
                                type={'button'}
                                onClick={() => submit()}
                                disabled={processing}
                            >
                                {tr('Submit')}
                            </PrimaryButton>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}
