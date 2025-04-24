const livrosMock = [
    {
      id: 1,
      titulo: 'Harry Potter e a Câmara Secreta',
      nota: 4.5,
      imagem: '/Livrosimgs/Harry-Potter-1.jpg',
      anoPublicacao: 1998,
      autor: 'J.K. Rowling',
      infoAutor: {
        anoNascimento: 1965,
        principaisObras: ['Harry Potter, ', 'Morte Súbita,', 'O Chamado do Cuco'],
        foto: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SY450_CR0%2C0%2C450%2C450_.jpg'
      },
      idioma: 'Inglês',
      numeroPaginas: 341,
      editora: 'Bloomsbury',
      localizacao: 'Prateleira A1',
      descricao: 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.'
  },
    {
      id: 2,
      titulo: 'Harry Potter e a Pedra Filosofal',
      nota: 4.0,
      imagem: '/Livrosimgs/Harry-Potter-2.jpg',
      anoPublicacao: 1997,
      autor: 'J.K. Rowling',
      infoAutor: {
        anoNascimento: 1965,
        principaisObras: ['Harry Potter', 'Morte Súbita', 'O Chamado do Cuco'],
        foto: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SY450_CR0%2C0%2C450%2C450_.jpg'
      },
      idioma: 'Inglês',
      numeroPaginas: 223,
      editora: 'Bloomsbury',
      localizacao: 'Prateleira A1',
      descricao: 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais.'
    },
    {
      id: 3,
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      nota: 4.7,
      imagem: '/Livrosimgs/Harry-Potter-3.jpg',
      anoPublicacao: 1999,
      autor: 'J.K. Rowling',
      infoAutor: {
        anoNascimento: 1965,
        principaisObras: ['Harry Potter', 'Morte Súbita', 'O Chamado do Cuco'],
        foto: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SY450_CR0%2C0%2C450%2C450_.jpg'
      },
      idioma: 'Inglês',
      numeroPaginas: 317,
      editora: 'Bloomsbury',
      localizacao: 'Prateleira A1',
      descricao: 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, "Harry Potter e o prisioneiro de Azkaban" traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.'
    },
    {
      id: 4,
      titulo: 'Jogos Vorazes',
      nota: 4.7,
      imagem: '/Livrosimgs/Jogos-Vorazes.jpg',
      anoPublicacao: 2008,
      autor: 'Suzanne Collins',
      infoAutor: {
        anoNascimento: 1962,
        principaisObras: ['Jogos Vorazes, ', 'Em Chamas, ', 'A Esperança'],
        foto: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/lcmpcfh4bq0c0m4kihfcvpt56b.jpg'
      },
      idioma: 'Inglês',
      numeroPaginas: 374,
      editora: 'Scholastic Press',
      localizacao: 'Prateleira B2',
      descricao: 'Em uma sociedade distópica dividida em distritos, Katniss Everdeen se voluntaria para participar dos Jogos Vorazes,\n' +
      'um evento brutal onde adolescentes lutam até a morte para entreter a elite de Panem.\n' +
      'Com habilidades afiadas e espírito rebelde, Katniss desafia o sistema e inspira uma revolução que mudará tudo.'
    },
    {
      id: 5,
      titulo: 'Percy Jackson e os Olimpianos',
      nota: 4.7,
      imagem: '/Livrosimgs/Percy-Jackson.webp',
      anoPublicacao: 2005,
      autor: 'Rick Riordan',
      infoAutor: {
        anoNascimento: 1964,
        principaisObras: ['Percy Jackson', 'As Crônicas dos Kane', 'Magnus Chase'],
        foto: 'https://www.booquiz.com/storage/authors_pictures/zuZSzeqGSSM1JnYrqtBvUTZqy8Y9COPzkzNnMm9V.jpeg'
      },
      idioma: 'Inglês',
      numeroPaginas: 377,
      editora: 'Miramax Books',
      localizacao: 'Prateleira B1',
      descricao: 'Percy Jackson, um garoto comum, descobre que é um semideus, filho de Poseidon.\n' +
      'Acusado de roubar o raio de Zeus, ele embarca em uma jornada para provar sua inocência e evitar uma guerra entre deuses.\n' +
      'Aventura, amizade e mitologia grega se misturam nesta épica história cheia de ação e magia.'
    },
    {
      id: 6,
      titulo: 'Felipe Neto - A trajetória de um dos maiores youtubers do Brasil',
      nota: 5,
      imagem: '/Livrosimgs/Felipe-Neto.jpg',
      anoPublicacao: 2018,
      autor: 'Felipe Neto',
      infoAutor: {
        anoNascimento: 1988,
        principaisObras: ['Não Faz Sentido!', 'Minha Vida Não Faz Sentido'],
        foto:'https://s2-quem.glbimg.com/4ZzrIbnIcRUwYsqp7wWJGz51oSo=/0x0:496x496/fit-in/496x510/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/h/f/pMURveRXCbC0t1CBpV9w/2020-02-05-felipe-neto.jpeg'
      },
      idioma: 'Português',
      numeroPaginas: 144,
      editora: 'Pixel',
      localizacao: 'Prateleira C3',
      descricao: 'Felipe Neto relata sua jornada de crescimento no YouTube, mostrando os altos e baixos da fama digital.\n' +
      'O livro explora suas estratégias para lidar com críticas, evoluir como criador de conteúdo e se posicionar em temas sociais,\n' +
      'inspirando jovens a seguirem seus sonhos com autenticidade.'
    },
    {
      id: 7,
      titulo: 'One Piece Vol. 1',
      nota: 5,
      imagem: '/Livrosimgs/One-Piece-vol1.jpg',
      anoPublicacao: 1997,
      autor: 'Eiichiro Oda',
      infoAutor: {
        anoNascimento: 1975,
        principaisObras: ['One Piece'],
        foto: 'https://images.mubicdn.net/images/cast_member/338108/cache-353994-1531355853/image-w856.jpg'
      },
      idioma: 'Japonês',
      numeroPaginas: 192,
      editora: 'Shueisha',
      localizacao: 'Prateleira D4',
      descricao: 'Monkey D. Luffy, inspirado pelos piratas lendários, parte em busca do tesouro supremo: o One Piece.\n' +
      'Com o poder de se esticar como borracha graças a uma fruta mágica, Luffy enfrenta inimigos formidáveis e encontra amigos leais,\n' +
      'iniciando a maior aventura pirata de todos os tempos.'
    },
    {
      id: 8,
      titulo: 'Psicologia Financeira',
      nota: 5,
      imagem: '/Livrosimgs/Psicologia-Financeira.jpg',
      anoPublicacao: 2020,
      autor: 'Morgan Housel',
      infoAutor: {
        anoNascimento: 1984,
        principaisObras: ['The Psychology of Money'],
        foto: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/rtoaal9u1721n93pmiqkl7s1u1.jpg'
      },
      idioma: 'Inglês',
      numeroPaginas: 256,
      editora: 'Harriman House',
      localizacao: 'Prateleira E2',
      descricao: 'Morgan Housel explora como comportamentos emocionais influenciam nossa relação com o dinheiro.\n' +
      'Com histórias reais e lições práticas, ele demonstra que o sucesso financeiro depende mais de disciplina e mentalidade do que de fórmulas matemáticas,\n' +
      'tornando o livro um guia indispensável para qualquer pessoa.'
    }
  ];
  

  export default livrosMock;