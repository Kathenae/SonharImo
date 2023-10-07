<?php

declare(strict_types=1);

return [
    'accepted'             => 'Este Campo deverá ser aceite.',
    'accepted_if'          => 'Este Campo deve ser aceite quando o :other é :value.',
    'active_url'           => 'Este Campo não contém um URL válido.',
    'after'                => 'Este Campo deverá conter uma data posterior a :date.',
    'after_or_equal'       => 'Este Campo deverá conter uma data posterior ou igual a :date.',
    'alpha'                => 'Este Campo deverá conter apenas letras.',
    'alpha_dash'           => 'Este Campo deverá conter apenas letras, números e traços.',
    'alpha_num'            => 'Este Campo deverá conter apenas letras e números .',
    'array'                => 'Este Campo deverá conter uma coleção de elementos.',
    'ascii'                => 'Este Campo deve conter apenas caracteres alfanuméricos de byte único e símbolos.',
    'before'               => 'Este Campo deverá conter uma data anterior a :date.',
    'before_or_equal'      => 'Este Campo deverá conter uma data anterior ou igual a :date.',
    'between'              => [
        'array'   => 'Este Campo deverá conter entre :min - :max elementos.',
        'file'    => 'Este Campo deverá ter um tamanho entre :min - :max kilobytes.',
        'numeric' => 'Este Campo deverá ter um valor entre :min - :max.',
        'string'  => 'Este Campo deverá conter entre :min - :max caracteres.',
    ],
    'boolean'              => 'Este Campo deverá conter o valor verdadeiro ou falso.',
    'can'                  => 'Este Campo contém um valor não autorizado.',
    'confirmed'            => 'A confirmação para este campo não coincide.',
    'current_password'     => 'A palavra-passe está incorreta.',
    'date'                 => 'Este Campo não contém uma data válida.',
    'date_equals'          => 'Este Campo tem de ser uma data igual a :date.',
    'date_format'          => 'A data indicada para este campo não respeita o formato :format.',
    'decimal'              => 'Este Campo deve ter :decimal casas decimais.',
    'declined'             => 'Este Campo deve ser recusado.',
    'declined_if'          => 'Este Campo deve ser recusado quando :other é :value.',
    'different'            => 'Os campos :attribute e :other deverão conter valores diferentes.',
    'digits'               => 'Este Campo deverá conter :digits caracteres.',
    'digits_between'       => 'Este Campo deverá conter entre :min a :max caracteres.',
    'dimensions'           => 'Este Campo deverá conter uma dimensão de imagem válida.',
    'distinct'             => 'Este Campo contém um valor duplicado.',
    'doesnt_end_with'      => 'Este Campo não pode terminar com um dos seguintes: :values.',
    'doesnt_start_with'    => 'Este Campo não pode começar com um dos seguintes: :values.',
    'email'                => 'Este Campo não contém um endereço de e-mail válido.',
    'ends_with'            => 'Este Campo deverá terminar com : :values.',
    'enum'                 => 'O :attribute selecionado é inválido.',
    'exists'               => 'O valor selecionado para este campo é inválido.',
    'file'                 => 'Este Campo deverá conter um ficheiro.',
    'filled'               => 'É obrigatória a indicação de um valor para este campo.',
    'gt'                   => [
        'array'   => 'Este Campo tem de ter mais de :value itens.',
        'file'    => 'Este Campo tem de ter mais de :value quilobytes.',
        'numeric' => 'Este Campo tem de ser maior do que :value.',
        'string'  => 'Este Campo tem de ter mais de :value caracteres.',
    ],
    'gte'                  => [
        'array'   => 'Este Campo tem de ter :value itens ou mais.',
        'file'    => 'Este Campo tem de ter :value quilobytes ou mais.',
        'numeric' => 'Este Campo tem de ser maior ou igual a :value.',
        'string'  => 'Este Campo tem de ter :value caracteres ou mais.',
    ],
    'image'                => 'Este Campo deverá conter uma imagem.',
    'in'                   => 'Este Campo não contém um valor válido.',
    'in_array'             => 'Este Campo não existe em :other.',
    'integer'              => 'Este Campo deverá conter um número inteiro.',
    'ip'                   => 'Este Campo deverá conter um IP válido.',
    'ipv4'                 => 'Este Campo deverá conter um IPv4 válido.',
    'ipv6'                 => 'Este Campo deverá conter um IPv6 válido.',
    'json'                 => 'Este Campo deverá conter um texto JSON válido.',
    'lowercase'            => 'Este Campo deve ser em minúsculas.',
    'lt'                   => [
        'array'   => 'Este Campo tem de ter menos de :value itens.',
        'file'    => 'Este Campo tem de ter menos de :value quilobytes.',
        'numeric' => 'Este Campo tem de ser inferior a :value.',
        'string'  => 'Este Campo tem de ter menos de :value caracteres.',
    ],
    'lte'                  => [
        'array'   => 'Este Campo não pode ter mais de :value itens.',
        'file'    => 'Este Campo tem de ter :value quilobytes ou menos.',
        'numeric' => 'Este Campo tem de ser inferior ou igual a :value.',
        'string'  => 'Este Campo tem de ter :value caracteres ou menos.',
    ],
    'mac_address'          => 'Este Campo deve ser um endereço MAC válido.',
    'max'                  => [
        'array'   => 'Este Campo não deverá conter mais de :max elementos.',
        'file'    => 'Este Campo não deverá ter um tamanho superior a :max kilobytes.',
        'numeric' => 'Este Campo não deverá conter um valor superior a :max.',
        'string'  => 'Este Campo não deverá conter mais de :max caracteres.',
    ],
    'max_digits'           => 'Este Campo não pode ter mais do que :max digítos.',
    'mimes'                => 'Este Campo deverá conter um ficheiro do tipo: :values.',
    'mimetypes'            => 'Este Campo deverá conter um ficheiro do tipo: :values.',
    'min'                  => [
        'array'   => 'Este Campo deverá conter no mínimo :min elementos.',
        'file'    => 'Este Campo deverá ter no mínimo :min kilobytes.',
        'numeric' => 'Este Campo deverá ter um valor superior ou igual a :min.',
        'string'  => 'Este Campo deverá conter no mínimo :min caracteres.',
    ],
    'min_digits'           => 'Este Campo deve ter pelo menos :min digítos.',
    'missing'              => 'Este Campo deve estar faltando.',
    'missing_if'           => 'Este Campo deve estar ausente quando :other for :value.',
    'missing_unless'       => 'Este Campo deve estar ausente, a menos que :other seja :value.',
    'missing_with'         => 'Este Campo deve estar ausente quando :values estiver presente.',
    'missing_with_all'     => 'Este Campo deve estar ausente quando :values estiverem presentes.',
    'multiple_of'          => 'Este Campo deve ser um múltiplo de :value',
    'not_in'               => 'Este Campo contém um valor inválido.',
    'not_regex'            => 'O formato de :attribute não é válido',
    'numeric'              => 'Este Campo deverá conter um valor numérico.',
    'password'             => [
        'letters'       => 'Este Campo deve conter pelo menos uma letra.',
        'mixed'         => 'Este Campo deve conter pelo menos uma maiúscula e uma minúscula.',
        'numbers'       => 'Este Campo deve conter pelo menos um número.',
        'symbols'       => 'Este Campo deve conter pelo menos um símbolo.',
        'uncompromised' => 'Este Campo apareceu numa fuga de dados. Por favor, escolha um :attribute diferente.',
    ],
    'present'              => 'Este Campo deverá estar presente.',
    'prohibited'           => 'Este Campo é proibido.',
    'prohibited_if'        => 'Este Campo é proibido quando :other é :value.',
    'prohibited_unless'    => 'Este Campo é proibido a menos que :other esteja em :values.',
    'prohibits'            => 'Este Campo proíbe :other de estar presente.',
    'regex'                => 'O formato do valor para este campo é inválido.',
    'required'             => 'É obrigatória a indicação de um valor para este campo.',
    'required_array_keys'  => 'Este Campo deve conter entradas para: :values.',
    'required_if'          => 'É obrigatória a indicação de um valor para este campo quando o valor do campo :other é igual a :value.',
    'required_if_accepted' => 'Este Campo é obrigatório quando :other foi aceite.',
    'required_unless'      => 'É obrigatória a indicação de um valor para este campo a menos que :other esteja presente em :values.',
    'required_with'        => 'É obrigatória a indicação de um valor para este campo quando :values está presente.',
    'required_with_all'    => 'É obrigatória a indicação de um valor para este campo quando um dos :values está presente.',
    'required_without'     => 'É obrigatória a indicação de um valor para este campo quando :values não está presente.',
    'required_without_all' => 'É obrigatória a indicação de um valor para este campo quando nenhum dos :values está presente.',
    'same'                 => 'Os campos :attribute e :other deverão conter valores iguais.',
    'size'                 => [
        'array'   => 'Este Campo deverá conter :size elementos.',
        'file'    => 'Este Campo deverá ter o tamanho de :size kilobytes.',
        'numeric' => 'Este Campo deverá conter o valor :size.',
        'string'  => 'Este Campo deverá conter :size caracteres.',
    ],
    'starts_with'          => 'Este Campo tem de começar com um dos valores seguintes: :values',
    'string'               => 'Este Campo deverá conter texto.',
    'timezone'             => 'Este Campo deverá ter um fuso horário válido.',
    'ulid'                 => 'Este Campo deve ser um ULID válido.',
    'unique'               => 'O valor indicado para este campo já se encontra registado.',
    'uploaded'             => 'O upload do ficheiro :attribute falhou.',
    'uppercase'            => 'Este Campo deve ser em maiúsculas.',
    'url'                  => 'O formato do URL indicado para este campo é inválido.',
    'uuid'                 => ':Attribute tem de ser um UUID válido.',
    'attributes'           => [
        'address'                  => 'morada',
        'age'                      => 'idade',
        'amount'                   => 'quantidade',
        'area'                     => 'área',
        'available'                => 'disponível',
        'birthday'                 => 'aniversário',
        'body'                     => 'corpo',
        'city'                     => 'cidade',
        'content'                  => 'conteúdo',
        'country'                  => 'país',
        'created_at'               => 'criado em',
        'creator'                  => 'criador',
        'current_password'         => 'senha atual',
        'date'                     => 'data',
        'date_of_birth'            => 'data de nascimento',
        'day'                      => 'dia',
        'deleted_at'               => 'apagado em',
        'description'              => 'descrição',
        'district'                 => 'distrito',
        'duration'                 => 'duração',
        'email'                    => 'email',
        'excerpt'                  => 'excerto',
        'filter'                   => 'filtro',
        'first_name'               => 'primeiro nome',
        'gender'                   => 'género',
        'group'                    => 'grupo',
        'hour'                     => 'hora',
        'image'                    => 'imagem',
        'last_name'                => 'apelido',
        'lesson'                   => 'lição',
        'line_address_1'           => 'primeira linha da morada',
        'line_address_2'           => 'segunda linha da morada',
        'message'                  => 'mensagem',
        'middle_name'              => 'nome do meio',
        'minute'                   => 'minuto',
        'mobile'                   => 'telemóvel',
        'month'                    => 'mês',
        'name'                     => 'nome',
        'national_code'            => 'código nacional',
        'number'                   => 'número',
        'password'                 => 'senha',
        'password_confirmation'    => 'confirmação da senha',
        'phone'                    => 'telefone',
        'photo'                    => 'foto',
        'postal_code'              => 'código postal',
        'price'                    => 'preço',
        'province'                 => 'província',
        'recaptcha_response_field' => 'campo de resposta recaptcha',
        'remember'                 => 'lembrar',
        'restored_at'              => 'restaurado em',
        'result_text_under_image'  => 'texto do resultado sob a imagem',
        'role'                     => 'função',
        'second'                   => 'segundo',
        'sex'                      => 'sexo',
        'short_text'               => 'texto curto',
        'size'                     => 'tamanho',
        'state'                    => 'estado',
        'street'                   => 'rua',
        'student'                  => 'estudante',
        'subject'                  => 'sujeito',
        'teacher'                  => 'professor',
        'terms'                    => 'termos',
        'test_description'         => 'descrição de teste',
        'test_locale'              => 'idioma de teste',
        'test_name'                => 'nome de teste',
        'text'                     => 'texto',
        'time'                     => 'tempo',
        'title'                    => 'título',
        'updated_at'               => 'atualizado em',
        'username'                 => 'nome de utilizador',
        'year'                     => 'ano',
    ],
];