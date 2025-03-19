const apiList = document.getElementById("api-list");
const searchInput = document.getElementById("search");

function criarCartoes(apis) {
    apiList.innerHTML = "";
    apis.forEach(loja => {
        loja.ambientes.forEach(ambiente => {
            const card = document.createElement("div");
            card.className = "api-card";
            const titulo = document.createElement("h2");
            titulo.textContent = `${loja.loja} - ${ambiente.nome}`;
            const lista = document.createElement("ul");
            ambiente.links.forEach(link => {
                const item = document.createElement("li");
                const a = document.createElement("a");
                a.href = link.url;
                a.target = "_blank";
                a.textContent = link.nome;
                item.appendChild(a);
                lista.appendChild(item);
            });
            card.appendChild(titulo);
            card.appendChild(lista);
            apiList.appendChild(card);
        });
    });
}

function normalizarAmbiente(termo) {
    if (["pr", "prd", "prod", "produção", "producao"].includes(termo)) return "PRD";
    if (["hl", "hlg", "hom", "homo", "homol", "homolog", "homologacao", "homologação"].includes(termo)) return "HLG";
    if (["si", "sit", "dev", "des", "dese", "desen", "desenvolvimento", "development"].includes(termo)) return "SIT";
    return null;
}

function normalizarBandeira(termo) {
    if (["cb", "cas", "casa", "casas", "ba", "bah", "bahi", "bahia", "casasbahia", "casas bahia"].includes(termo)) return "Casas Bahia";
    if (["pf", "pon", "pont", "ponto", "pontofrio", "ponto frio"].includes(termo)) return "Ponto Frio";
    if (["ex", "ext", "extr", "extra"].includes(termo)) return "Extra";
    return null;
}

function inicializarBusca(apis) {
    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.trim().toLowerCase();
        const ambienteFiltrado = normalizarAmbiente(termo);
        const bandeiraFiltrada = normalizarBandeira(termo);

        let filtrados;

        if (ambienteFiltrado) {
            filtrados = apis.map(loja => ({
                loja: loja.loja,
                ambientes: loja.ambientes.filter(ambiente => ambiente.nome === ambienteFiltrado)
            })).filter(loja => loja.ambientes.length > 0);
        } else if (bandeiraFiltrada) {
            filtrados = apis.filter(loja => loja.loja === bandeiraFiltrada);
        } else {
            filtrados = apis.map(loja => ({
                loja: loja.loja,
                ambientes: loja.ambientes.map(ambiente => ({
                    nome: ambiente.nome,
                    links: ambiente.links.filter(link => link.nome.toLowerCase().includes(termo))
                })).filter(ambiente => ambiente.links.length > 0)
            })).filter(loja => loja.ambientes.length > 0);
        }

        criarCartoes(filtrados);
    });

    criarCartoes(apis);
}