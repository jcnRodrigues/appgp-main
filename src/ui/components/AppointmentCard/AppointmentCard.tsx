
import Link from "next/link";



interface AppointmentCardProps {
    id: string;
    title: string;
    date: string;
    UsuarioPat: string;
}

export function AppointmentCard({ id, title, date, UsuarioPat }: AppointmentCardProps) {
    return (
        <div key="123" className="flex bg-white rounded-lg p-3 mb-3 shadow-sm">
            <div className="w-16 h-16 roaunded-full overflow-hidden mr-4">
                <Link href={`/`}>
                    <img
                        src="http://github.com/jcnRodrigues.png"
                        alt="Joao Claudio Nascimento Rodrigues"
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>
        </div>
    );
}