import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="container py-24">
            <MotionWrapper className="mx-auto max-w-2xl text-center mb-16" delay={0.2}>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Entre em Contato
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Agende seu horário ou tire suas dúvidas. Estamos esperando por você!
                </p>
            </MotionWrapper>

            <div className="grid gap-8 lg:grid-cols-2">
                <MotionWrapper direction="right" delay={0.3}>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-medium">Localização</h3>
                                <p className="text-muted-foreground">
                                    Rua Exemplo, 123 - Centro<br />
                                    Cidade - SC, 88888-888
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-medium">Telefone / WhatsApp</h3>
                                <p className="text-muted-foreground">(47) 99971-1211</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Instagram className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-medium">Instagram</h3>
                                <Link href="https://instagram.com/alicecadore" className="text-muted-foreground hover:text-primary transition-colors">
                                    @alicecadore
                                </Link>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video w-full rounded-lg bg-secondary/20 flex items-center justify-center text-muted-foreground border">
                            Mapa do Google Maps
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper direction="left" delay={0.4}>
                    <form className="space-y-6 p-6 border rounded-lg shadow-sm bg-card">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nome</label>
                                <Input id="name" placeholder="Seu nome" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Telefone</label>
                                <Input id="phone" placeholder="(00) 00000-0000" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mensagem</label>
                            <Textarea
                                id="message"
                                placeholder="Olá, gostaria de agendar um horário para..."
                                className="min-h-[120px]"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Enviar Mensagem
                        </Button>
                    </form>
                </MotionWrapper>
            </div>
        </section>
    );
}
