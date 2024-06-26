import Carousel from '@/components/carousel/carousel';
import CurrentEvent from '@/components/current-events/current-events';
import UpcomingEvents from '@/components/upcoming-events/upcoming-events';

export default function Home() {
    return (
        <main>
            <Carousel />
            <div className="max-w-[1440px] w-full m-auto px-4 md:px-10 lg:px-36">
                <CurrentEvent />
                <UpcomingEvents />
            </div>
        </main>
    );
}
