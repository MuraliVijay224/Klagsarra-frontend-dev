import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  slides: carousel[] = [
    {
      image: '/carosel-image5.jpg',
      title: 'Exquisite 2023/24 - Women',
      subtitle: 'An Exquisite amalgamation of Heritage and Modernity inspired by a Timeless piece',
    },
    {
      image: '/carosel-image3.jpg',
      title: 'Bridal Collections',
      subtitle: 'Create your own visual style… Let it be unique for yourself and yet identifiable for others.',
    },
    {
      image: '/carosel-image4.jpg',
      title: 'Elevate Your Wardrobe',
      subtitle: '',
    },
  ];
  curatedItems = [
    {
      title: 'Look 1',
      description: 'Elegant and chic designs.',
      image: '/curated-1.webp' // Replace with your image paths
    },
    {
      title: 'Look 2',
      description: 'Bold and vibrant styles.',
      image: '/curated-2.jpg'
    },
    {
      title: 'Look 3',
      description: 'Timeless and classic pieces.',
      image: '/curated-3.jpg'
    }
  ];
  cards = [
    {
      category: 'Category',
      heading: 'Saree',
      imageUrl: '/curated-1.webp',
      link: '#'
    },
    {
      category: 'Category',
      heading: 'Suits',
      imageUrl: '/curated-2.jpg',
      link: '#'
    },
    {
      category: 'Category',
      heading: 'Lehengas',
      imageUrl: '/curated-3.jpg',
      link: '#'
    },
    {
      category: 'Category',
      heading: 'Formals',
      imageUrl: '/curated-4.jpg',
      link: '#'
    }
  ];

  ngAfterViewInit() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.error('Error trying to play video:', error);
      });
    });
  }
}

export interface carousel {
    image: string,
    title: string,
    subtitle: string,
}