<?php

namespace App\Http\Requests;

use App\Models\HouseListing;
use Illuminate\Foundation\Http\FormRequest;

class ListingUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'images' => 'array',
            'images.*' => 'max:8000',
            'province' => 'required|string',
            'city' => 'required|string',
            'address' => 'required|string',
            'property_type' => 'required|string',
            'deal_type' => 'required|in:rent,sale',
            'negotiation_type' => 'required|in:internal,external',
            'price' => 'required|numeric',
            'plot_square_footage' => 'nullable|numeric',
            'total_bedrooms' => 'nullable|integer',
            'total_showers' => 'nullable|integer',
            'total_parking_spaces' => 'nullable|integer',
            'owner_name' => 'required|string',
            'owner_phone_number' => 'required|string',
            'owner_secondary_phone_number' => 'nullable|string',
            'owner_personal_id_number' => 'required|string',
            'owner_address' => 'required|string',
            'owner_email_address' => 'required|email',
            'is_published' => 'boolean',
            'include_convenience' => 'boolean',
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        session()->flash('flash.warning', 'Não foi possível criar o anúncio, verifique os campos e tente novamente.');
        parent::failedValidation($validator);
    }

    public function validatedWithQueryData(HouseListing $listing, array $extraRules = []): array
    {
        $this->validate(array_merge($this->rules(), $extraRules));

        return [
            'province' => $this->province,
            'city' => $this->city,
            'address' => $this->address,
            'property_type' => $this->property_type,
            'deal_type' => $this->deal_type,
            'negotiation_type' => isset($this->negotiation_type)? $this->negotiation_type : $listing->negotiation_type,
            'price' => $this->price,
            'plot_square_footage' => isset($this->plot_square_footage)? $this->plot_square_footage : $listing->plot_square_footage,
            'total_bedrooms' => isset($this->total_bedrooms)? $this->total_bedrooms : $listing->total_bedrooms,
            'total_showers' => isset($this->total_showers)? $this->total_showers : $listing->total_showers,
            'total_parking_spaces' => isset($this->total_parking_spaces)? $this->total_parking_spaces : $this->total_parking_spaces,
            'owner_name' => $this->owner_name,
            'owner_phone_number' => $this->owner_phone_number,
            'owner_secondary_phone_number' => $this->owner_secondary_phone_number,
            'owner_personal_id_number' => $this->owner_personal_id_number,
            'owner_address' => $this->owner_address,
            'owner_email_address' => $this->owner_email_address,
            'is_published' => isset($this->is_published) ? $this->is_published : $listing->is_published,
            'publish_at' => isset($this->publish_at) ? $this->publish_at : $listing->publish_at,
            'user_id' => $this->user()->id,
            'include_convenience' => isset($this->include_convenience)? $this->include_convenience : $listing->include_convenience
        ];
    }
}
