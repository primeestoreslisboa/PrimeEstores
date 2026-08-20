# Plano SEO — Trial 7 dias SEMrush (Prime Estores)

> **Objetivo:** extrair o máximo de dados do trial de 7 dias e implementar as bases para subir nas buscas orgânicas (estores / domótica — Grande Lisboa, 8 idiomas).
>
> **Verdade importante:** em 7 dias **não** se chega à 1ª página do Google (leva semanas a meses). O trial serve para **extrair/exportar dados que valem ouro e que perdes quando acaba**, corrigir o site e montar o mapa de trabalho. O ranking vem depois.

---

## ⚠️ ANTES de assinar (15 min — não gastes dias do trial nisto)

1. **Google Search Console** (grátis, para sempre) → adicionar `primeestores.pt`, verificar propriedade e **submeter `https://primeestores.pt/sitemap-index.xml`**. É a ferramenta #1 e não expira.
2. **Google Business Profile** (grátis) → criar/reivindicar "Prime Estores": categoria *Serviço de instalação de estores*, zona Grande Lisboa, telefone +351 923 348 323, horário Seg–Sáb 8–20h. Para SEO **local** pesa mais que o SEMrush.
3. Só depois criar a conta trial (requer cartão). **Lembrete no telemóvel para o Dia 6** para cancelar (senão cobra ~€100+/mês).
4. Assinar o **trial Pro de 7 dias**.

---

## 📅 Plano dia-a-dia

### Dia 1 — Setup + baseline
- [ ] **Projects → Create project** para `primeestores.pt`.
- [ ] **Site Audit** → correr auditoria completa → **exportar PDF/CSV**.
- [ ] **Position Tracking** → Localização **Lisboa, Portugal** · **Mobile** · país PT · 30–40 keywords iniciais (Dia 2) · 2–3 concorrentes (Dia 3).
- [ ] **Domain Overview** de `primeestores.pt` → apontar nº keywords orgânicas, tráfego, Authority Score (o "antes").

### Dia 2 — Keyword research (EXPORTA TUDO — o mais valioso)
Ferramenta: **Keyword Magic Tool**, país **Portugal**. Exportar cada lista para CSV:
```
estores Lisboa
estores elétricos
reparação estores
estores manuais
motorização estores
casa inteligente
domótica
automação estores
estores + [zona]  (Sintra, Cascais, Oeiras, Almada, Setúbal, Amadora, Loures, Odivelas...)
```
- [ ] Filtrar **Intent = Commercial/Transactional** + **KD% < 40** → alvos rápidas.
- [ ] Marcar **KD baixo + volume decente + intenção comercial** = prioridade máxima.
- [ ] Guardar long-tail / perguntas → temas de blog.

### Dia 3 — Concorrência (a mina de ouro)
- [ ] **Organic Research** → 2–3 concorrentes ("estores Lisboa" no Google, ver o topo) → exportar keywords orgânicas de cada.
- [ ] **Keyword Gap** → `primeestores.pt` vs concorrentes → filtrar **"Missing"** e **"Weak"** → **exportar** (roadmap de keywords).
- [ ] **Backlink Gap** → mesmos concorrentes → sites que lhes dão links e a ti não → **exportar** (alvos de link building).

### Dia 4 — On-Page + backlinks + fixes
- [ ] **On Page SEO Checker** → ligar ao projeto → recomendações página-a-página → **exportar "ideas"**.
- [ ] **Backlink Analytics** → teu perfil + concorrentes → identificar **directórios PT/locais** para listar.
- [ ] **Site Audit** → resolver erros restantes (pedir ajuda no código).

### Dia 5 — Mapa keyword→página + conteúdo
- [ ] Folha simples: **cada keyword-alvo → página que a ataca** (ex.: "reparação estores Lisboa" → `/servicos/reparacao-estores`). Sem página = artigo novo.
- [ ] **Keyword Gap** → escolher 5–10 temas de blog (boa procura / baixa KD).
- [ ] **Listing Management / Local** (se disponível) → verificar consistência **NAP** (nome/morada/telefone).

### Dia 6 — Implementar + CANCELAR
- [ ] Aplicar recomendações on-page nas páginas prioritárias (títulos, H1, meta descriptions, conteúdo com keywords-alvo).
- [ ] **Exportar qualquer relatório em falta** (depois perdes o acesso).
- [ ] **CANCELAR** (Profile → Subscription info → Cancel) → confirmar email de cancelamento.

### Dia 7 — Buffer
- [ ] Folga para exportar/implementar o que faltar e reconfirmar cancelamento.

---

## 🎯 Se só houver tempo para 3 coisas
1. **Keyword Gap** — o que os concorrentes têm e tu não.
2. **Keyword Magic** exportado — alvos KD baixo + intenção comercial.
3. **On Page SEO Checker** — o que mudar em cada página.

## Depois do trial (grátis, contínuo)
- Implementar páginas/artigos do mapa keyword→página.
- **Google Search Console** para acompanhar posições (substitui o Position Tracking).
- **Google Business Profile** + reviews — para "estores Lisboa" o pack local é meio caminho andado.

---

## Notas do site (contexto)
- Stack: Astro + Netlify, atrás de Cloudflare. Domínio `primeestores.pt`.
- Idiomas: PT (default) · EN · FR · ES · DE · IT · RU · UK — hreflang de 8 idiomas.
- Serviços: estores elétricos, estores manuais, reparação de estores, eletricidade, casa inteligente (domótica).
- Já corrigido nesta fase: robots.txt (Cloudflare Content-Signal), llms.txt, links internos `/sobre/`, mojibake (travessão), cookie banner (âncora), rácio texto/HTML (`inlineStylesheets: 'auto'`), páginas "Sobre" nos 6 idiomas, nova página Casa Inteligente, e RU/UK em todo o site.

## Ajuda direta no código (quando tiveres os exports)
- Aplicar keyword-alvo em `<title>`, meta descriptions, H1 e conteúdo das páginas certas.
- Criar novas páginas/artigos indicados pela análise de gap.
