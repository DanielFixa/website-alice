import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const accessories = [
    {
        category: "Coroas",
        rent: "R$ 50,00",
        loss: "R$ 150,00",
        items: [
            { name: "Butterfly", color: "Rose Gold", desc: "Aparência delicada, estilo romântico" },
            { name: "Pérolas", color: "Prata", desc: "Destaque nas pérolas, estilo romântico" },
            { name: "Diva", color: "Prata", desc: "Pedrarias e strass, sofisticado e elegante" },
            { name: "Princess", color: "Prata", desc: "Pérolas, strass e pedras azuladas" },
            { name: "Shine", color: "Prata", desc: "Pedras e strass, estrutura fina e delicada" },
            { name: "Lady", color: "Rose Prata", desc: "Strass e pedras azul claro" },
            { name: "Arabesque", color: "Prata", desc: "Strass e pedras azuis" },
        ]
    },
    {
        category: "Tiaras Grinalda",
        rent: "R$ 35,00",
        loss: "R$ 100,00",
        items: [
            { name: "Pérolas", color: "Prateada", desc: "Pequenas pérolas, pedrinhas transparentes" },
            { name: "Flowers", color: "Prateada", desc: "Somente pequenas pérolas formando flores" },
            { name: "Rose Gold", color: "Rose Gold", desc: "Folhas em todo design e pequenos strass" },
            { name: "Nature", color: "Dourada", desc: "Strass e pequenas folhas" },
            { name: "Gold", color: "Dourada", desc: "Mistura de pérolas, strass e flores" },
        ]
    },
    {
        category: "Presilhas",
        rent: "R$ 35,00",
        loss: "R$ 100,00",
        items: [
            { name: "Flowers", color: "Prateada", desc: "Strass em todo design e pequenas folhas" },
            { name: "Pérolas", color: "Prateada", desc: "Pérolas em todo design e pequenas folhas" },
            { name: "Delicate", color: "Prateada", desc: "Pérolas e strass formando pequenas flores" },
        ]
    }
];

export function AccessoryGallery() {
    return (
        <section id="gallery" className="container py-24 bg-secondary/10">
            <MotionWrapper className="mx-auto max-w-2xl text-center mb-16" delay={0.2}>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Acessórios de Luxo
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Complete o seu visual com nossa coleção exclusiva de coroas e tiaras.
                </p>
            </MotionWrapper>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {accessories.map((category, index) => (
                    <MotionWrapper key={category.category} delay={0.2 * index} direction="up">
                        <Card className="overflow-hidden border-none shadow-md h-full">
                            <CardHeader className="bg-primary/5 pb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <CardTitle>{category.category}</CardTitle>
                                    <Badge variant="outline" className="bg-background">Aluguel: {category.rent}</Badge>
                                </div>
                                <CardDescription className="text-xs">
                                    Extravio/Dano: {category.loss}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ul className="divide-y">
                                    {category.items.map((item) => (
                                        <li key={item.name} className="p-4 hover:bg-secondary/20 transition-colors">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className="font-medium text-foreground">{item.name}</span>
                                                <span className="text-xs text-muted-foreground">{item.color}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
}
