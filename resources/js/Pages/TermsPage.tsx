import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function TermsPage(props: PageProps) {
    return (
        <Layout {...props}>
            <Head title="Termos e Condições" />

            <div className="pt-24 px-4 lg:px-24 text-2xl">
                <div className="w-full p-4">
                    <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
                    <p className="mb-6">Leia atentamente estes Termos de Uso ("Termos") antes de usar nosso website ("Sonhar Imobiliaria"). Estes Termos regem o seu acesso e uso do Website, incluindo quaisquer serviços, recursos e conteúdo fornecidos pelo Website. Ao usar nosso Website, você concorda em cumprir estes Termos. Se você não concorda com qualquer parte destes Termos, por favor, não use o Website.</p>

                    <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                    <p className="mb-6">Ao acessar ou usar nosso Website, você afirma ter pelo menos 18 anos e estar apto a celebrar um contrato legalmente vinculante. Se você estiver usando o Website em nome de uma organização, você declara e garante que possui autoridade para vincular essa organização a estes Termos.</p>

                    <h2 className="text-2xl font-bold mb-4">2. Responsabilidades do Usuário</h2>
                    <p className="mb-6">a. Criação de Conta: Para utilizar determinados recursos do Website, você pode ser obrigado(a) a criar uma conta de usuário. Você é responsável por manter a confidencialidade das informações de sua conta e por todas as atividades que ocorram em sua conta.</p>
                    <p className="mb-6">b. Precisão das Informações: Você concorda em fornecer informações precisas, atualizadas e completas ao usar o Website. Você é o único responsável pelo conteúdo, precisão e legalidade de qualquer informação que você enviar ao Website.</p>
                    <p className="mb-6">c. Cumprimento das Leis: Você concorda em cumprir todas as leis, regulamentos e direitos de terceiros aplicáveis ao usar o Website. Você é responsável por garantir que o seu uso do Website não viole quaisquer obrigações legais ou contratuais que você possa ter.</p>
                    <p className="mb-6">d. Atividades Proibidas: Você concorda em não se envolver em nenhuma das seguintes atividades:
                        <ul className="list-disc list-inside">
                            <li>Publicar informações falsas, enganosas ou fraudulentas.</li>
                            <li>Violar quaisquer direitos de propriedade intelectual ou direitos proprietários de terceiros.</li>
                            <li>Enviar ou transmitir qualquer vírus, malware ou outro código prejudicial.</li>
                            <li>Interferir ou interromper o funcionamento do Website.</li>
                            <li>Praticar atividades ilegais ou incentivar outros a fazê-lo.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-bold mb-4">3. Conteúdo Gerado pelo Usuário</h2>
                    <p className="mb-6">a. Propriedade: Ao enviar qualquer conteúdo, incluindo texto, imagens, vídeos ou outros materiais ("Conteúdo do Usuário"), para o Website, você nos concede uma licença não exclusiva, mundial, isenta de royalties para usar, reproduzir, modificar, publicar, distribuir e exibir o Conteúdo do Usuário com o objetivo de operar e promover o Website.</p>
                    <p className="mb-6">b. Responsabilidade: Você é o único responsável por qualquer Conteúdo do Usuário que você enviar para o Website. Não endossamos nem garantimos a precisão, integridade ou qualidade de qualquer Conteúdo do Usuário. Temos o direito, mas não a obrigação, de monitorar, editar ou remover qualquer Conteúdo do Usuário que considerarmos inadequado ou em violação destes Termos.</p>

                    <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
                    <p className="mb-6">a. Conteúdo do Website: O Website e seu conteúdo, incluindo, mas não se limitando a texto, gráficos, logotipos, imagens, software e materiais audiovisuais, são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual. Você não pode copiar, modificar, distribuir ou reproduzir qualquer parte do Website sem nosso consentimento prévio por escrito.</p>
                    <p className="mb-6">b. Conteúdo do Usuário: Ao enviar Conteúdo do Usuário para o Website, você declara e garante que possui os direitos e permissões necessárias para nos conceder a licença descrita na Seção 3(a). Você concorda em não enviar qualquer Conteúdo do Usuário que infrinja ou viole os direitos de terceiros.</p>

                    <h2 className="text-2xl font-bold mb-4">5. Websites e Serviços de Terceiros</h2>
                    <p className="mb-6">O Website pode conter links para websites ou serviços de terceiros que não são de nossa propriedade ou controle. Não endossamos nem assumimos qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer websites ou serviços de terceiros. Suas interações com websites ou serviços de terceiros são exclusivamente entre você e o terceiro.</p>

                    <h2 className="text-2xl font-bold mb-4">6. Isenção de Garantias</h2>
                    <p className="mb-6">O WEBSITE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA" E "CONFORME DISPONÍVEL". NÃO FAZEMOS REPRESENTAÇÕES OU GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO. NÃO GARANTIMOS QUE O WEBSITE SERÁ ISENTO DE ERROS, ININTERRUPTO OU SEGURO.</p>

                    <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
                    <p className="mb-6">NA MEDIDA DO PERMITIDO PELA LEI APLICÁVEL, NÃO SEREMOS RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO A PERDA DE LUCROS, DADOS OU OUTRAS PERDAS INTANGÍVEIS, DECORRENTES OU RELACIONADOS AO SEU USO DO WEBSITE.</p>

                    <h2 className="text-2xl font-bold mb-4">8. Modificação e Rescisão</h2>
                    <p className="mb-6">Reservamo-nos o direito de modificar, suspender ou encerrar o Website ou estes Termos a qualquer momento, sem aviso prévio. Podemos também impor limites a determinados recursos ou restringir seu acesso a partes ou à totalidade do Website sem responsabilidade.</p>

                    <h2 className="text-2xl font-bold mb-4">9. Lei Aplicável e Jurisdição</h2>
                    <p className="mb-6">Estes Termos serão regidos e interpretados de acordo com as leis de [Jurisdição]. Qualquer disputa decorrente destes Termos ou relacionada ao seu uso do Website estará sujeita à jurisdição exclusiva dos tribunais localizados em [Jurisdição].</p>

                    <h2 className="text-2xl font-bold mb-4">10. Acordo Integral</h2>
                    <p className="mb-6">Estes Termos constituem o acordo integral entre você e nós em relação ao uso do Website, substituindo quaisquer acordos ou entendimentos anteriores, sejam escritos ou verbais.</p>
                </div>
            </div>
        </Layout>
    )
}
