/* =====================================================
   CONFIGURAÇÃO
===================================================== */

// Coloque aqui o seu número do WhatsApp.
// Formato: 55 + DDD + número
const whatsapp = "5511992827007";


/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [
    {
        nome: "Lápis/Delineador de Olhos",
        descricao: "Lápis de olhos em formato retrátil/caneta na cor preta.",
        preco: 30,
        categoria: "maquiagem",
        foto: "images/produto-01.jpg",
        vendido: false
    },
    {
        nome: "Óleo Milagroso Pantene Pro-V Miracles (Keratina) 95ml",
        descricao: "Óleo capilar reparador de pontas enriquecido com queratina, proporciona nutrição, brilho e controle do frizz.",
        preco: 20,
        categoria: "cabelo",
        foto: "images/produto-02.jpeg",
        vendido: true
    },
    {
        nome: "MAC Hyper Real Fresh Canvas Cleansing Oil 15ml",
        descricao: "Óleo de limpeza facial de alta performance que remove maquiagem e impurezas suavemente sem ressecar a pele.",
        preco: 40,
        categoria: "outros",
        foto: "images/produto-03.jpeg",
        vendido: false
    },
    {
        nome: "Primer Smashbox Photo Finish Minimize Pores",
        descricao: "Primer facial aveludado focado em disfarçar poros dilatados e controlar a oleosidade, prolongando a maquiagem.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-04.jpeg",
        vendido: false
    },
    {
        nome: "Kit de Pincéis de Maquiagem com Estojo Beges/Dourados",
        descricao: "Conjunto de pincéis para olhos e detalhamento com cabos em tom bege/dourado, acompanha bolsa/estojo protetor de couro sintético.",
        preco: 40,
        categoria: "acessorios",
        foto: "images/produto-05.jpeg",
        vendido: false
    },
    {
        nome: "Paleta de Sombras Neutras com Estojo Dourado",
        descricao: "Paleta versátil com tons neutros, cintilantes e opacos em embalagem dourada espelhada. Item fora de linha / esgotado no site.",
        preco: 100,
        categoria: "maquiagem",
        foto: "images/produto-06.jpeg",
        vendido: true
    },
    {
        nome: "Pó Marmo Misto Ruby Rose GLASS Marble Essence (Cor MBO2 - Royalty)",
        descricao: "Bronzer e iluminador marmorizado com acabamento radiante, textura fina e alta pigmentação.",
        preco: 20,
        categoria: "maquiagem",
        foto: "images/produto-07.jpeg",
        vendido: false
    },
    {
        nome: "Amo Glow Corporal Óleo Iluminador com Vitamina E",
        descricao: "Óleo iluminador corporal com partículas douradas reluzentes e vitamina E para hidratação e brilho intenso na pele.",
        preco: 30,
        categoria: "outros",
        foto: "images/produto-08.jpeg",
        vendido: false
    },
    {
        nome: "Cola para Glitter Angel Fix Pri Lessa",
        descricao: "Fixador leve e transparente para glitters e pigmentos, garante fixação prolongada sem craquelar.",
        preco: 25,
        categoria: "maquiagem",
        foto: "images/produto-09.jpg",
        vendido: false
    },
    {
        nome: "Placa de Inox Anatômica para Mistura de Maquiagem",
        descricao: "Placa de metal compacta encaixável no dedo para misturar bases, corretivos e batons de forma higiênica.",
        preco: 12,
        categoria: "acessorios",
        foto: "images/produto-10.jpg",
        vendido: false
    },
    {
        nome: "Esfoliante Corporal e Facial Raavi Melancia",
        descricao: "Creme esfoliante com aroma de melancia que remove impurezas e células mortas, deixando a pele macia e renovada.",
        preco: 20,
        categoria: "outros",
        foto: "images/produto-11.jpeg",
        vendido: false
    },
    {
        nome: "Organizador de Batons em Acrílico Transparente",
        descricao: "Suporte com compartimentos em acrílico resistente para organizar batons ou glosses.",
        preco: 15,
        categoria: "acessorios",
        foto: "images/produto-12.jpg",
        vendido: false
    },
    {
        nome: "Sombra Magnética/Glitter Kiko Milano",
        descricao: "Sombra mono em tom dourado com alto brilho, textura macia e acabamento metálico reluzente.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-13.png",
        vendido: false
    },
    {
        nome: "Iluminador em Bastão Crystal Highlight Stick",
        descricao: "Iluminador cremoso em formato stick de fácil aplicação, garante efeito glow natural e perolado.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-14.png",
        vendido: false
    },
    {
        nome: "Batom Líquido MAC Retro Matte Liquid Lipcolour",
        descricao: "Batom líquido de acabamento opaco aveludado com tonalidade rosa intensa e alta durabilidade.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-15.jpg",
        vendido: false
    },
    {
        nome: "Batom / Tint Vermelho Mini",
        descricao: "Batom líquido/tint em tom vermelho vibrante com embalagem compacta.",
        preco: 30,
        categoria: "maquiagem",
        foto: "images/produto-16.jpeg",
        vendido: false
    },
    {
        nome: "Delineador / Gel para Sobrancelhas ou Olhos",
        descricao: "Produto em bastão/pincel com aplicador de precisão para olhos ou sobrancelhas.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-17.jpg",
        vendido: false
    },
    {
        nome: "Apontador de Maquiagem Océane",
        descricao: "Apontador com dupla entrada, uma com 8mm e outra com 12mm.",
        preco: 10,
        categoria: "maquiagem",
        foto: "images/produto-18.jpg",
        vendido: false
    },
    {
        nome: "Apontador de Lápis Benefit All-Purpose Sharpener",
        descricao: "Apontador duplo rosa com tampa de proteção, adequado para lápis de maquiagem finos e grossos.",
        preco: 30,
        categoria: "acessorios",
        foto: "images/produto-19.jpeg",
        vendido: false
    },
    {
        nome: "Sombra Mono Urban Decay (Tons Roxos / Violeta)",
        descricao: "Sombra individual em embalagem metálica icônica da marca, com tom roxo brilhante e alta fixação.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-20.jpg",
        vendido: false
    },
    {
        nome: "Sombra Mono Sephora Colorful Pailleté / Glitter",
        descricao: "Sombra individual compacta tom cinza/prata com micropartículas de brilho reluzente.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-21.jpg",
        vendido: false
    },
    {
        nome: "Sombra MAC Mono Tom Verde Cobre / Esmeralda",
        descricao: "Sombra individual com acabamento metálico, brilho dimensional e textura aveludada.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-22.jpg",
        vendido: false
    },
    {
        nome: "Sombra MAC Dazzleshadow Extreme (Tom Dourado)",
        descricao: "Sombra metálica com brilho intenso, pigmentos refletores e embalagem com visor transparente.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-23.jpeg",
        vendido: false
    },
    {
        nome: "Sombra MAC Dazzleshadow Extreme (Tom Prateado)",
        descricao: "Sombra prateada ultra brilhante com acabamento folheado e alta cobertura.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-24.jpeg",
        vendido: false
    },
    {
        nome: "Sombra MAC Extra Dimension (Verde Metalizado)",
        descricao: "Sombra de acabamento híbrido (creme e pó) com brilho verde metálico e textura em relevo.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-25.jpeg",
        vendido: false
    },
    {
        nome: "Sombra MAC Mono Edição Especial (Tom Grafite / Escuro)",
        descricao: "Sombra individual compacta com embalagem colecionável em tom vibrante.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-26.jpeg",
        vendido: false
    },
    {
        nome: "Sombra Mono NYX Professional Makeup",
        descricao: "Sombra individual cintilante em tom champagne/dourado claro.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-27.jpeg",
        vendido: false
    },
    {
        nome: "Sombra MAC Mono In Extra Dimension / Frost (Tom Rosado)",
        descricao: "Sombra compacta com brilho delicado em tom rosa neutro.",
        preco: 80,
        categoria: "maquiagem",
        foto: "images/produto-28.jpeg",
        vendido: false
    },
    {
        nome: "Iluminador Líquido Niina Secrets Glow",
        descricao: "Iluminador multifuncional líquido em bisnaga, perfeito para um acabamento glow natural na face.",
        preco: 30,
        categoria: "maquiagem",
        foto: "images/produto-29.jpeg",
        vendido: true
    },
    {
        nome: "Iluminador / Base Líquida Glow (Larissa Manoela / Océane)",
        descricao: "Produtos de iluminação líquida com embalagens de vidro em tons bronze e champagne.",
        preco: 30,
        categoria: "maquiagem",
        foto: "images/produto-30.jpeg",
        vendido: false
    },
    {
        nome: "Kit de Cílios Postiços Volumosos HBZGTLAD",
        descricao: "Cartela com múltiplos pares de cílios postiços efeito mink, volumosos e reutilizáveis.",
        preco: 15,
        categoria: "acessorios",
        foto: "images/produto-31.jpg",
        vendido: false
    },
    {
        nome: "Base Líquida Niina Secrets Hydro Fluid / Basic",
        descricao: "Base facial na cor 4 e cor 2.",
        preco: 25,
        categoria: "maquiagem",
        foto: "images/produto-32.jpg",
        vendido: false
    },
    {
        nome: "Paleta de Sombras - Ready Palette Océane Limited 20g",
        descricao: "São 9 tons, 2 mattes, 2 cintilantes e 5 com textura wet para você arrasar em qualquer ocasião.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-33.jpeg",
        vendido: false
    },
    {
        nome: "Pó Iluminador / Finalizador \"Tô no Glow\"",
        descricao: "Pó fino iluminador facial para selar a maquiagem dando viço e radiância à pele.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-34.jpg",
        vendido: false
    },
    {
        nome: "Blush Compacto Sephora Colorful (Tom Pêssego / Queimado)",
        descricao: "Blush facial de alta pigmentação com acabamento matte e toque aveludado.",
        preco: 50,
        categoria: "maquiagem",
        foto: "images/produto-35.jpeg",
        vendido: false
    },
    {
        nome: "Blush Compacto Sephora (Tom Malva / Vinho)",
        descricao: "Blush facial em tom fechado sofisticado, fácil de esfumar e com ótima fixação.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-36.jpeg",
        vendido: false
    },
    {
        nome: "Máscara de Cílios MAC In Extreme Dimension Waterproof",
        descricao: "Máscara de cílios à prova d'água para volume extremo e alongamento sem borrar.",
        preco: 100,
        categoria: "maquiagem",
        foto: "images/produto-37.jpeg",
        vendido: false
    },
    {
        nome: "Batom Lápis NARS Velvet Matte (Cor Dolce Vita / Vinho)",
        descricao: "Batom em formato de lápis grosso com acabamento matte e aplicação precisa.",
        preco: 40,
        categoria: "maquiagem",
        foto: "images/produto-38.jpg",
        vendido: false
    },
    {
        nome: "Perfume Miniatura Les Belles de Nina / Nina Ricci",
        descricao: "Mini frasco colecionável em formato de maçã com fragrância feminina e delicada.",
        preco: 50,
        categoria: "outros",
        foto: "images/produto-39.png",
        vendido: true
    },
    {
        nome: "Gloss Labial Vizzela In Love Fit Gloss",
        descricao: "Gloss labial rosa com partículas de brilho e efeito volumoso suave sem ficar grudento.",
        preco: 10,
        categoria: "maquiagem",
        foto: "images/produto-40.jpg",
        vendido: true
    },
    {
        nome: "Necessaire Sephora",
        descricao: "Necessaire Sephora estilo puff.",
        preco: 25,
        categoria: "acessorios",
        foto: "images/produto-41.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Sephora",
        descricao: "Necessaire Sephora com lacinho.",
        preco: 25,
        categoria: "acessorios",
        foto: "images/produto-42.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Sephora",
        descricao: "Necessaire Sephora com divisória.",
        preco: 25,
        categoria: "acessorios",
        foto: "images/produto-43.JPG",
        vendido: false
    },
    {
        nome: "Mochila Sephora",
        descricao: "Mochila Sephora tamanho médio.",
        preco: 40,
        categoria: "acessorios",
        foto: "images/produto-44.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Vizela",
        descricao: "Necessaire Vizela.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-45.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Ruby Rose",
        descricao: "Necessaire Ruby Rose.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-46.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Beyong",
        descricao: "Necessaire Beyong.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-47.JPG",
        vendido: false
    },
    {
        nome: "Bolsa",
        descricao: "Bolsa.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-48.jpg",
        vendido: true
    },
    {
        nome: "Bag Wet´n Wild",
        descricao: "Bag Wet´n Wild.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-49.JPG",
        vendido: false
    },
    {
        nome: "Bag Ruby Rose",
        descricao: "Bag Ruby Rose.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-50.JPG",
        vendido: false
    },
    {
        nome: "Bag Mia Make",
        descricao: "Bag Mia Make.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-51.JPG",
        vendido: false
    },
    {
        nome: "Bag Oboticario",
        descricao: "Bag Oboticario.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-52.JPG",
        vendido: false
    },
    {
        nome: "Necessaire Época",
        descricao: "Necessaire Época.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-53.JPG",
        vendido: false
    },
    {
        nome: "Prochete Maybelline",
        descricao: "Prochete Maybelline.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-54.jpg",
        vendido: false
    },
    {
        nome: "Porta Jóias Sephora",
        descricao: "Porta Jóias Sephora.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-55.JPG",
        vendido: false
    },
    {
        nome: "Garrafinha Sephora",
        descricao: "Garrafinha Sephora.",
        preco: 20,
        categoria: "acessorios",
        foto: "images/produto-56.JPG",
        vendido: false
    },
    {
        nome: "Maleta de Maquiagem",
        descricao: "Maleta de Maquiagem nunca usada.",
        preco: 50,
        categoria: "acessorios",
        foto: "images/produto-57.jpeg",
        vendido: false
    },
    {
        nome: "Bolsa Dalla Makeup",
        descricao: "Bolsa Dalla Makeup nunca usada.",
        preco: 35,
        categoria: "acessorios",
        foto: "images/produto-58.jpeg",
        vendido: false
    },
    {
        nome: "Necessaire Bolsinha MAC Vermelha (Edição Exclusiva)",
        descricao: "Necessaire/bolsinha exclusiva da MAC na cor vermelha, novinha, lacrada na embalagem original e nunca usada.",
        preco: 50,
        categoria: "acessorios",
        foto: "images/produto-59.jpg",
        vendido: true
    },
    {
        nome: "Blush em Bastão Catharine Hill (Blush Stick)",
        descricao: "Blush cremoso em formato stick de fácil aplicação e esfumado, perfeito para um acabamento natural e radiante.",
        preco: 30,
        categoria: "maquiagem",
        foto: "images/produto-60.jpg",
        vendido: false
    },
    {
        nome: "Lápis Labial Vermelho Ruby Rose",
        descricao: "Lápis para contorno labial em tom vermelho, ideal para definir os lábios e aumentar a durabilidade do batom.",
        preco: 10,
        categoria: "maquiagem",
        foto: "images/produto-61.jpg",
        vendido: false
    },
    {
        nome: "Lápis de Olhos Preto Contém 1g",
        descricao: "Lápis para olhos na cor preta, com pigmentação intensa e maciez para um traço preciso ou esfumado.",
        preco: 20,
        categoria: "maquiagem",
        foto: "images/produto-62.jpg",
        vendido: true
    },
    {
        nome: "Lápis de Olhos Preto O Boticário (Intense)",
        descricao: "Lápis para olhos preto da linha Intense de O Boticário, com textura macia e fórmula vegana.",
        preco: 20,
        categoria: "maquiagem",
        foto: "images/produto-63.jpg",
        vendido: true
    }
];


/* =====================================================
   ELEMENTOS
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const productCount =
    document.getElementById("productCount");

const noResults =
    document.getElementById("noResults");

const filters =
    document.querySelectorAll(".filter");


/* =====================================================
   FORMATAR PREÇO
===================================================== */

function formatarPreco(preco) {

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =====================================================
   CRIAR LINK DO WHATSAPP
===================================================== */

function criarWhatsApp(produto) {

    const mensagem =
        `Oi! Tenho interesse no produto "${produto.nome}" por ${formatarPreco(produto.preco)}.`;

    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

}


/* =====================================================
   DESENHAR PRODUTOS
===================================================== */

function mostrarProdutos(lista) {

    productsGrid.innerHTML = "";

    noResults.classList.remove("show");


    if (lista.length === 0) {

        noResults.classList.add("show");

        productCount.textContent = "0 produtos";

        return;
    }


    productCount.textContent =
        `${lista.length} ${lista.length === 1 ? "produto" : "produtos"}`;


    lista.forEach(produto => {

        const card = document.createElement("article");

        card.className =
            `product-card ${produto.vendido ? "sold" : ""}`;


        const status = produto.vendido
            ? `<span class="status sold">VENDIDO</span>`
            : `<span class="status available">DISPONÍVEL</span>`;


        const botao = produto.vendido

            ? `
                <span class="interest-button disabled">
                    Indisponível
                </span>
              `

            : `
                <a
                    href="${criarWhatsApp(produto)}"
                    target="_blank"
                    class="interest-button"
                >
                    Tenho interesse
                </a>
              `;


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${produto.foto}"
                    alt="${produto.nome}"
                    loading="lazy"
                >

                ${status}

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${produto.categoria}
                </span>

                <h3 class="product-name">
                    ${produto.nome}
                </h3>

                <p class="product-description">
                    ${produto.descricao}
                </p>


                <div class="product-bottom">

                    <span class="product-price">
                        ${formatarPreco(produto.preco)}
                    </span>

                    ${botao}

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


/* =====================================================
   FILTROS
===================================================== */

function filtrarProdutos(filtro) {

    let resultado;


    if (filtro === "todos") {

        resultado = produtos;

    }

    else if (filtro === "disponiveis") {

        resultado =
            produtos.filter(produto => !produto.vendido);

    }

    else if (filtro === "vendidos") {

        resultado =
            produtos.filter(produto => produto.vendido);

    }

    else {

        resultado =
            produtos.filter(
                produto => produto.categoria === filtro
            );

    }


    mostrarProdutos(resultado);

}


/* =====================================================
   CLIQUE NOS FILTROS
===================================================== */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");


        const filtro =
            button.dataset.filter;


        filtrarProdutos(filtro);

    });

});


/* =====================================================
   INICIAR
===================================================== */

mostrarProdutos(produtos);