import { AppointmentCard } from "@/ui/components/AppointmentCard/AppointmentCard";
import HeaderHome from "@/ui/components/Header/HeaderHome";
import SectionHeader from "@/ui/components/SectionHeader/SectionHeader";


export default function Home() {
  return (
    <div className="bg-background min-h-screen py-6 px-4" >
      <HeaderHome />
      <SectionHeader title="Consulta Patrimonio" linkText="Ver Todas" linkHref="/#"/>
      <AppointmentCard id={"123"} title={"teste"} date="05/05/2025" UsuarioPat={"test"} />
    </div>
  );
}