import ExcelJS from "exceljs";
import { Payment } from "../data/payments";

interface Props {
  pagos: Payment[];
}

export const exportUser = async ({ pagos }: Props) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Clientes");

    // agregando cabecera al excel
    worksheet.columns = [
      { header: "ID", key: "id" },
      { header: "Saldo", key: "amount" },
      { header: "Estado", key: "status" },
      { header: "Cliente", key: "clientName" },
      { header: "Correo", key: "email" },
    ];

    // agregando filas al excel
    pagos.map((pago) => {
      worksheet.addRow({
        id: pago.id,
        amount: pago.amount,
        status: pago.status,
        clientName: pago.clientName,
        email: pago.email,
      });
    });

    // preparando archivo excel como buffer para exportarlo
    const buffer = await workbook.xlsx.writeBuffer();
    console.log(buffer);

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    return {
      ok: true,
      blob,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      data: `no se pudo exportar el archivo ${error}`,
    };
  }
};
