import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    question: "¿Cuál es la política de devolución de su tienda?",
    answer: "Nuestra política de devolución permite devolver los productos dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original y sin usar. Los gastos de envío para las devoluciones corren por cuenta del cliente."
  },
  {
    id: "2",
    question: "¿Cómo puedo rastrear mi pedido?",
    answer: "Una vez que su pedido haya sido enviado, recibirá un correo electrónico con un número de seguimiento y un enlace para rastrear su pedido. Puede usar este número en nuestro sitio web para verificar el estado del envío."
  },
  {
    id: "3",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal, y transferencias bancarias. Todos los pagos se procesan de forma segura a través de nuestros socios de pago."
  },
  {
    id: "4",
    question: "¿Cómo puedo cambiar o cancelar un pedido?",
    answer: "Para cambiar o cancelar un pedido, debe contactarnos dentro de las 24 horas posteriores a la realización del pedido. Después de este período, los cambios pueden no ser posibles si el pedido ya ha sido procesado o enviado."
  }
];


export default function HomePage() {
  return (
    <Accordion type="multiple" className="w-full">

      {
        items.map(item => {
          return (
            <AccordionItem key={item.id}  value={item.id}>
              <AccordionTrigger>{ item.question }</AccordionTrigger>
              <AccordionContent>
                { item.answer }
              </AccordionContent>
            </AccordionItem>
          )
        })
      }
      
    
    
    </Accordion>
  );
}