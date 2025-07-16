import Header from "@/ui/components/Header/HeaderHome";

    export default function AboutLayout({children}: Readonly<{
  children: React.ReactNode;
}>){
return (
    <div style={{ padding: '20px', textAlign: 'center' }}>  
        <Header />
        {children}  
    </div>
    );
}