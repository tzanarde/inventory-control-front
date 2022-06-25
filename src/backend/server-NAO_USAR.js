module.exports = () => {
  const data = {
    usuarios: [],
    motoristas: [],
    geral: []
  }

  data.usuarios.push({
    id: 1,
    username: 'test',
    password: '123',
    email: 'contato@test.com.br',
    password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c3VhcmlvMSIsInNlbmhhIjoiMTIzIn0.Pu_q8I5wAFYKMoRHx89SALV2zRE9YvfmF6WYthpDLbU'
  });

  data.motoristas = [
    {
      "id": 1,
      "name": "Pouca Tripa",
      "birth_date": "1976-09-22T00:00:00",
      "state": "São Paulo",
      "city": "São Paulo",
      "enable": true,
      "addresses": {
        "name": "Casa",
        "state": "São Paulo",
        "country": "BR",
        "neighborhood": "CENTRO",
        "city": "São Paulo",
        "street_number": 24,
        "complement": "apartamento",
        "postal_code": "01300-000",
        "street_name": "Avenida Paulista"
      },
      "documents": [
        {
          "expires_at": "2010-11-23T00:00:00+00:00",
          "country": "BR",
          "number": "700441702",
          "doc_type": "CNH",
          "category": "AB"
        }
      ]
    },
    {
      "id": 2,
      "name": "Quase nada",
      "birth_date": "1986-09-22T00:00:00",
      "state": "Rio de Janeiro",
      "city": "Niterói",
      "enable": true,
      "addresses": {
        "name": "",
        "state": "",
        "country": "",
        "neighborhood": "",
        "city": "",
        "street_number": "",
        "complement": "",
        "postal_code": "",
        "street_name": ""
      },
      "documents": [
        {
          "country": "BR",
          "number": "12312312377",
          "doc_type": "CPF"
        }
      ],

    },

  ];

  data.geral = [
    {
  "produtos": [
      {
        "id": 1,
        "cliente": "Cliente 1",
        "categoria": "1",
        "descricao": "Cliente 1",
        "quantidade": "1",
        "codigobarras": "123456"
      },
      {
        "id": 2,
        "cliente": "Cliente 2",
        "categoria": "2",
        "descricao": "Cliente 2",
        "quantidade": "2",
        "codigobarras": "123456"
      },
      {
        "id": 3,
        "cliente": "Cliente 3",
        "categoria": "3",
        "descricao": "Cliente 3",
        "quantidade": "3",
        "codigobarras": "123456"
      }
    ],
    "clientes": [
      {
        "id": 1,
        "nome": "Nome 1",
        "endereco": "Endereco 1",
        "telefone": "Telefone 1"
      },
      {
        "id": 2,
        "nome": "Nome 2",
        "endereco": "Endereco 2",
        "telefone": "Telefone 2"
      },
      {
        "id": 3,
        "nome": "Nome 3",
        "endereco": "Endereco 3",
        "telefone": "Telefone 3"
      }
    ],
    "categorias": [
      {
        "id": 1,
        "cliente": "Cliente 1",
        "nome": "Nome 1",
        "email": "Email 1"
      },
      {
        "id": 2,
        "cliente": "Cliente 2",
        "nome": "Nome 2",
        "email": "Email 2"
      },
      {
        "id": 3,
        "cliente": "Cliente 3",
        "nome": "Nome 3",
        "email": "Email 3"
      }
    ]
    }

  ];

  return data;
}
