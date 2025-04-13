import {
  Button,
  buttonVariants,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  cn,
  Input,
} from '@nx-mfed-mfe/ui';
import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function Index() {
  return (
    <>
      <header className="mx-auto">
        <div className="container grid grid-cols-12 mx-auto items-center min-h-[4.5rem]">
          <div className="col-span-2">
            <div className="w-14 h-14">
              <Logo />
            </div>
          </div>
          <div className="col-span-7 content-center justify-items-center">
            <nav>
              <ul className="flex gap-6 font-medium">
                <li>New</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sport</li>
              </ul>
            </nav>
          </div>
          <div className="col-span-3">
            <div className="flex gap-2">
              <Input type="search" name="search" placeholder="Search" />
              <Button variant="secondary" size="icon">
                <Heart />
              </Button>
              <Button variant="secondary" size="icon">
                <ShoppingBag />
              </Button>
            </div>
          </div>
        </div>
      </header>
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
      <footer className="mx-auto">
        <div className="container mx-auto py-14">
          <Footer />
        </div>
      </footer>
    </>
  );
}

function Logo() {
  return (
    <svg
      aria-hidden="true"
      className="w-full h-full"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 8.719 7.836 14.303Q6.191 15 5.075 15q-1.256 0-1.819-.884c-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19z"
        clipRule="evenodd"
      />
    </svg>
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
                <h1 className="text-6xl font-bold font-bebas">{banner.title}</h1>
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

function Footer() {
  const links = [
    { label: 'Find a Store', url: '#' },
    { label: 'Help', url: '#' },
    { label: 'Join Us', url: '#' },
    { label: 'Sign In', url: '#' },
  ];

  const categories = [
    {
      title: 'Featured',
      links: [
        { label: 'Air Force 1', url: '#' },
        { label: 'Jordan 1', url: '#' },
        { label: 'Air Max Dn', url: '#' },
        { label: 'Vomero', url: '#' },
      ],
    },
    {
      title: 'Shoes',
      links: [
        { label: 'All Shoes', url: '#' },
        { label: 'Jordan Shoes', url: '#' },
        { label: 'Running Shoes', url: '#' },
        { label: 'Basketball Shoes', url: '#' },
      ],
    },
    {
      title: 'Clothing',
      links: [
        { label: 'All Clothing', url: '#' },
        { label: 'Top & T-Shirts', url: '#' },
        { label: 'Shorts', url: '#' },
        { label: 'Hoodies & Pullovers', url: '#' },
      ],
    },
    {
      title: 'Kids',
      links: [
        { label: 'Infant & Toddler Shoes', url: '#' },
        { label: 'Kids Shoes', url: '#' },
        { label: 'Kids Basketball Shoes', url: '#' },
        { label: 'Kids Running Shoes', url: '#' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="w-16">
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={cn(buttonVariants({ variant: 'link' }))}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="max-w-3xl mx-auto w-full">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className='flex flex-col gap-6'>
              <h4 className='text-xl'>{category.title}</h4>
              <ul>
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className={cn(buttonVariants({ variant: 'link' }), "p-0")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
