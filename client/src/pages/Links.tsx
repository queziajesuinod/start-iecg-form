import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PIX_DIZIMOS = "24.663.858/0001-02";
const PIX_PRIMICIAS = "financeiro@iecg.com.br";
const PIX_NOVO_TEMPLO = "novotemploiecg@gmail.com";

const copyToClipboard = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copiado.`);
  } catch (err) {
    console.error("Erro ao copiar", err);
    toast.error("Não foi possível copiar, copie manualmente.");
  }
};

export default function Links() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container py-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">IECG ONLINE</h1>
            <p className="text-slate-600">
              Links rápidos - Igreja Evangélica Comunidade Global.
            </p>
          </header>

          <Card className="p-6 shadow-xl border border-slate-200 bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">START IECG</h2>
                <p className="text-sm text-slate-600">Orientando um novo começo - Queremos te conhecer melhor.</p>
              </div>
              <Button asChild>
                <a href="/">Se inscrever</a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 shadow-xl border border-slate-200 bg-white space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">PIX oficiais</h2>
              <p className="text-sm text-slate-600">Igreja Evangélica Comunidade Global</p>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-700">Dízimos e Ofertas (CNPJ)</p>
                <div className="flex flex-col md:flex-row gap-2">
                  <Input readOnly value={PIX_DIZIMOS} className="bg-slate-50" />
                  <Button variant="outline" onClick={() => copyToClipboard(PIX_DIZIMOS, "PIX Dízimos e Ofertas")}>
                    Copiar
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-700">Primícias (E-mail)</p>
                <div className="flex flex-col md:flex-row gap-2">
                  <Input readOnly value={PIX_PRIMICIAS} className="bg-slate-50" />
                  <Button variant="outline" onClick={() => copyToClipboard(PIX_PRIMICIAS, "PIX Primícias")}>
                    Copiar
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-700">Ofertas para o Novo Templo</p>
                <div className="flex flex-col md:flex-row gap-2">
                  <Input readOnly value={PIX_NOVO_TEMPLO} className="bg-slate-50" />
                  <Button variant="outline" onClick={() => copyToClipboard(PIX_NOVO_TEMPLO, "PIX Novo Templo")}>
                    Copiar
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-xl border border-slate-200 bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Ofertas online</h2>
                <p className="text-sm text-slate-600">Acesse diretamente o portal de ofertas.</p>
              </div>
              <Button asChild variant="secondary">
                <a href="https://ofertas.iecg.com.br/" target="_blank" rel="noreferrer">
                  Ir para ofertas.iecg.com.br
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
