import ContactFrom from "../Components/ReservationComponents/ContactFrom";
import TableBookingForm from "../Components/ReservationComponents/TableBookingForm";
import ShairdHeader from "../Components/ShairdHeader";

const Reservation = () => {
  return (
    <div>
      <ShairdHeader about="Reservation" path="Reservation"></ShairdHeader>
      <TableBookingForm></TableBookingForm>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default Reservation;
