import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@nx-mfed-mfe/ui';
import Header from 'core/modules/header';
import Footer from 'core/modules/footer';

export function Index() {
  return (
    <>
      <Header />
      <div className="mx-auto">
        <div className="container bg-slate-10 mx-auto aspect-[16/7]">
          <Banners />
        </div>
      </div>
      <div className="mx-auto">
        <div className="container mx-auto py-14">
          <Categories />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Banners() {
  const banners = [
    {
      image: 'images/nike-just-do-it.jpg',
      title: 'Speed is ours',
      tagline: 'Look fast, and feel faster in the Nike Sonic Fly',
      actionLabel: 'Shop Kids',
    },
    {
      image: 'images/nike-just-do-it-2.jpg',
      title: 'Nothing can stop you',
      tagline:
        'Stay ready for anything the city throws your way with the Nike City',
      actionLabel: 'Shop',
    },
  ];

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent className="-ml-1">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="aspect-[16/7] bg-slate-50">
            <img src={banner.image} alt="banner" className="w-full h-full" />
            <div className="absolute bottom-0 w-full text-center text-background bg-gradient-to-t from-black py-20 px-6 flex flex-col gap-8 items-center">
              <div className="flex flex-col items-center gap-2 max-w-2xl">
                <h1 className="text-6xl font-bold font-bebas">
                  {banner.title}
                </h1>
                <h6 className="text-lg opacity-80 font-light">
                  {banner.tagline}
                </h6>
              </div>
              <Button variant="secondary">{banner.actionLabel}</Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 right-0 p-4 flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

function Categories() {
  const categories = [
    {
      image: 'images/nike-just-do-it-3.jpg',
      actionLabel: 'Shop Running',
    },
    {
      image: 'images/nike-just-do-it-4.jpg',
      actionLabel: 'Shop Basketball',
    },
    {
      image: 'images/nike-just-do-it-5.jpg',
      actionLabel: 'Shop Golf',
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="col-span-2 w-full aspect-[4/5] overflow-hidden relative"
        >
          <img
            src={category.image}
            alt="category banner"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 p-8 flex items-end">
            <Button variant="secondary">{category.actionLabel}</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
