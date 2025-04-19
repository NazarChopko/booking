import BookingWidget from '../../widget/Booking';
import Title from '../../shared/Title';

const BookingPage = () => {
  return (
    <main className="bg-primary h-full min-h-screen px-4 py-2 ">
      <Title as="h1" text="Booking" className="text-white text-center text-2xl" />
      <BookingWidget />
    </main>
  );
};

export default BookingPage;
