import BookingWidget from '../../widgets/Booking';
import AppLayout from '../../Layouts/AppLayout';

const BookingPage = () => {
  return (
    <AppLayout>
      {' '}
      <main className="bg-transparent h-full  ">
        <BookingWidget />
      </main>
    </AppLayout>
  );
};

export default BookingPage;
