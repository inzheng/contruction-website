import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Your gallery images with actual construction project photos
  const galleryImages = [
    {
      id: 1,
      title: 'Kitchen Renovation',
      description: 'Modern kitchen remodeling with custom cabinetry',
      thumbnail: 'https://imgur.com/O8kZWqh.jpg', 
      fullSize: 'https://imgur.com/O8kZWqh.jpg'
    },
    {
      id: 2,
      title: 'Bathroom Remodel',
      description: 'Complete bathroom renovation with modern fixtures',
      thumbnail: 'https://i.imgur.com/Qyc5WdX.jpg',
      fullSize: 'https://i.imgur.com/Qyc5WdX.jpg'
    },
    {
      id: 3,
      title: 'Residential Construction',
      description: 'New residential construction project',
      thumbnail: 'https://i.imgur.com/EEz26Er.jpg',
      fullSize: 'https://i.imgur.com/EEz26Er.jpg'
    },
    {
      id: 4,
      title: 'Interior Renovation',
      description: 'Complete interior remodeling and finishing',
      thumbnail: 'https://i.imgur.com/AMJBB6H.jpg',
      fullSize: 'https://i.imgur.com/AMJBB6H.jpg'
    },
    {
      id: 5,
      title: 'Custom Kitchen Design',
      description: 'Luxury kitchen installation with premium finishes',
      thumbnail: 'https://i.imgur.com/Y5v019N.jpg',
      fullSize: 'https://i.imgur.com/Y5v019N.jpg'
    },
    {
      id: 6,
      title: 'Commercial Project',
      description: 'Commercial space renovation and build-out',
      thumbnail: 'https://i.imgur.com/IVbIcfW.jpg',
      fullSize: 'https://i.imgur.com/IVbIcfW.jpg'
    },
    {
      id: 7,
      title: 'Flooring Installation',
      description: 'Premium flooring and tile installation',
      thumbnail: 'https://i.imgur.com/Gwui3Zb.jpg',
      fullSize: 'https://i.imgur.com/Gwui3Zb.jpg'
    },
    {
      id: 8,
      title: 'Exterior Work',
      description: 'Exterior renovation and improvements',
      thumbnail: 'https://i.imgur.com/wuHkIAr.jpg',
      fullSize: 'https://i.imgur.com/wuHkIAr.jpg'
    },
    {
      id: 9,
      title: 'Home Renovation',
      description: 'Complete home renovation project',
      thumbnail: 'https://i.imgur.com/Wqa3fhK.jpg',
      fullSize: 'https://i.imgur.com/Wqa3fhK.jpg'
    },
    {
      id: 10,
      title: 'Modern Kitchen',
      description: 'Contemporary kitchen design and installation',
      thumbnail: 'https://i.imgur.com/4t3IqYJ.jpg',
      fullSize: 'https://i.imgur.com/4t3IqYJ.jpg'
    },
    {
      id: 11,
      title: 'Bathroom Design',
      description: 'Luxury bathroom design and renovation',
      thumbnail: 'https://i.imgur.com/I0P7az9.jpg',
      fullSize: 'https://i.imgur.com/I0P7az9.jpg'
    },
    {
      id: 12,
      title: 'Construction Project',
      description: 'New construction and framing work',
      thumbnail: 'https://i.imgur.com/XPvMtXn.jpg',
      fullSize: 'https://i.imgur.com/XPvMtXn.jpg'
    },
    {
      id: 13,
      title: 'Interior Finishing',
      description: 'Interior finishing and detail work',
      thumbnail: 'https://i.imgur.com/wDpUQhW.jpg',
      fullSize: 'https://i.imgur.com/wDpUQhW.jpg'
    },
    {
      id: 14,
      title: 'Kitchen Remodel',
      description: 'Complete kitchen remodeling project',
      thumbnail: 'https://i.imgur.com/241lJJK.jpg',
      fullSize: 'https://i.imgur.com/241lJJK.jpg'
    },
    {
      id: 15,
      title: 'Residential Project',
      description: 'Residential renovation and improvements',
      thumbnail: 'https://i.imgur.com/nc4OeXx.jpg',
      fullSize: 'https://i.imgur.com/nc4OeXx.jpg'
    },
    {
      id: 16,
      title: 'Custom Cabinetry',
      description: 'Custom cabinet installation and finishing',
      thumbnail: 'https://i.imgur.com/f1b6Erm.jpg',
      fullSize: 'https://i.imgur.com/f1b6Erm.jpg'
    },
    {
      id: 17,
      title: 'Bathroom Renovation',
      description: 'Modern bathroom renovation project',
      thumbnail: 'https://i.imgur.com/qUHlTNj.jpg',
      fullSize: 'https://i.imgur.com/qUHlTNj.jpg'
    },
    {
      id: 18,
      title: 'Construction Work',
      description: 'Professional construction and building work',
      thumbnail: 'https://i.imgur.com/bwNbgix.jpg',
      fullSize: 'https://i.imgur.com/bwNbgix.jpg'
    },
    {
      id: 19,
      title: 'Home Improvement',
      description: 'Home improvement and renovation services',
      thumbnail: 'https://i.imgur.com/Ryltc5j.jpg',
      fullSize: 'https://i.imgur.com/Ryltc5j.jpg'
    },
    {
      id: 20,
      title: 'Kitchen Design',
      description: 'Modern kitchen design and installation',
      thumbnail: 'https://i.imgur.com/NbdeXtR.jpg',
      fullSize: 'https://i.imgur.com/NbdeXtR.jpg'
    },
    {
      id: 21,
      title: 'Interior Work',
      description: 'Interior construction and finishing',
      thumbnail: 'https://i.imgur.com/KYOO64k.jpg',
      fullSize: 'https://i.imgur.com/KYOO64k.jpg'
    },
    {
      id: 22,
      title: 'Renovation Project',
      description: 'Complete renovation and remodeling',
      thumbnail: 'https://i.imgur.com/Jd0etm9.jpg',
      fullSize: 'https://i.imgur.com/Jd0etm9.jpg'
    },
    {
      id: 23,
      title: 'Building Project',
      description: 'New building construction project',
      thumbnail: 'https://i.imgur.com/4WeInt2.jpg',
      fullSize: 'https://i.imgur.com/4WeInt2.jpg'
    },
    {
      id: 24,
      title: 'Custom Work',
      description: 'Custom construction and finishing work',
      thumbnail: 'https://i.imgur.com/L6Cd0UQ.jpg',
      fullSize: 'https://i.imgur.com/L6Cd0UQ.jpg'
    },
    {
      id: 25,
      title: 'Quality Finishing',
      description: 'High-quality finishing and detail work',
      thumbnail: 'https://i.imgur.com/Yq7DdGe.jpg',
      fullSize: 'https://i.imgur.com/Yq7DdGe.jpg'
    },
    {
      id: 26,
      title: 'Final Project',
      description: 'Completed construction project showcase',
      thumbnail: 'https://i.imgur.com/09PN4B4.jpg',
      fullSize: 'https://i.imgur.com/09PN4B4.jpg'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="gallery">
      <div className="container">
        <h2>Our Work</h2>
        <p className="gallery-intro">
          Browse through our portfolio of completed construction projects. Click on any image to see the full details.
        </p>
        
        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.thumbnail} 
                alt={image.title}
                className="thumbnail"
              />
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-button"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
              
              <img 
                src={selectedImage.fullSize} 
                alt={selectedImage.title}
                className="modal-image"
              />
              
              {/* Navigation arrows */}
              <button 
                className="nav-button prev-button"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button 
                className="nav-button next-button"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;