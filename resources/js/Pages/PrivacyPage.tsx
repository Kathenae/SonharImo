import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function PrivacyPage(props: PageProps) {
    return (
        <Layout {...props}>
            <Head title="Politicas de Privacidade" />

            <div className="pt-24 px-4 lg:px-24 text-2xl">
                <div className="w-full p-4">
                    <h1 className="text-3xl font-bold mb-6">Politicas de Privacidade</h1>
                    <p className="mb-6">Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos as informações pessoais que você fornece ao usar nosso website ("Sonhar Imobiliaria"). Ao usar o Website, você concorda com a coleta e uso de suas informações pessoais de acordo com esta Política de Privacidade. Se você não concorda com esta Política de Privacidade, por favor, não use o Website.</p>

                    <h2 className="text-2xl font-bold mb-4">1. Informações Coletadas</h2>
                    <p className="mb-6">a. Informações Fornecidas por Você: Podemos coletar informações pessoais que você fornece voluntariamente ao usar o Website, como nome, endereço de e-mail, número de telefone e outras informações de contato.</p>
                    <p className="mb-6">b. Informações de Uso: Podemos coletar informações sobre como você usa o Website, incluindo seu endereço IP, tipo de navegador, páginas visitadas e outras informações de uso.</p>

                    <h2 className="text-2xl font-bold mb-4">2. Uso das Informações</h2>
                    <p className="mb-6">a. Fornecimento de Serviços: Utilizamos suas informações pessoais para fornecer os serviços e recursos do Website solicitados por você.</p>
                    <p className="mb-6">b. Comunicações: Podemos usar suas informações pessoais para enviar comunicações relacionadas ao Website, como atualizações, notificações e informações sobre serviços.</p>
                    <p className="mb-6">c. Melhoria do Website: Podemos usar suas informações para melhorar o design, funcionalidade e desempenho do Website, bem como para desenvolver novos recursos e serviços.</p>
                    <p className="mb-6">d. Cumprimento Legal: Podemos usar ou divulgar suas informações pessoais para cumprir com obrigações legais, responder a solicitações governamentais ou proteger nossos direitos legais.</p>

                    <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Informações</h2>
                    <p className="mb-6">a. Terceiros de Confiança: Podemos compartilhar suas informações pessoais com terceiros de confiança que nos ajudam a operar, fornecer ou melhorar o Website, sujeitos a obrigações de confidencialidade.</p>
                    <p className="mb-6">b. Consentimento: Podemos compartilhar suas informações pessoais com terceiros fora do escopo desta Política de Privacidade se obtivermos seu consentimento.</p>
                    <p className="mb-6">c. Cumprimento Legal: Podemos divulgar suas informações pessoais para cumprir com obrigações legais, fazer valer nossos direitos legais ou responder a processos legais.</p>

                    <h2 className="text-2xl font-bold mb-4">4. Segurança das Informações</h2>
                    <p className="mb-6">Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir a segurança absoluta de suas informações.</p>

                    <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                    <p className="mb-6">Podemos usar cookies e tecnologias semelhantes para coletar informações sobre seu uso do Website. Cookies são arquivos de texto que são armazenados em seu dispositivo quando você visita um website. Você pode controlaro uso de cookies através das configurações do seu navegador. Observe que a desativação de cookies pode afetar algumas funcionalidades do Website.</p>

                    <h2 className="text-2xl font-bold mb-4">6. Links para Sites de Terceiros</h2>
                    <p className="mb-6">O Website pode conter links para sites de terceiros. Esta Política de Privacidade não se aplica a esses sites e não somos responsáveis pelas práticas de privacidade ou conteúdo deles. Recomendamos que você leia as políticas de privacidade desses sites antes de fornecer suas informações pessoais.</p>

                    <h2 className="text-2xl font-bold mb-4">7. Alterações nesta Política de Privacidade</h2>
                    <p className="mb-6">Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja esta página regularmente para se manter informado sobre quaisquer alterações. Ao continuar a usar o Website após as alterações nesta Política de Privacidade, você concorda com as modificações feitas.</p>
                </div>
            </div>
        </Layout>
    )
}
