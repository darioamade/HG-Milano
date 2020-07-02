gsap.from(".navbar", { duration: 1, y: "-100%", ease: "bounce", delay: 7 });

gsap.from(".new-in", { duration: 1, opacity: 0, delay: 0 });


gsap.from(".item-1", { duration: 2, y: "-150%", ease: "bounce", delay: 0, stagger: .5 });
gsap.from(".item-2", { duration: 1, x: "-100vw", ease: "power1", delay: 1, stagger:.5});
gsap.from(".item-3", { duration: 1, x: "100vw",ease: 'power2.in', delay: 2, stagger: .5});
gsap.from(".item-4", { duration: 1, x: "-200%",ease: 'power2.in', delay: 3, stagger: .5});
//  gsap.from(".item-5", { duration: 1,x: "-200%",rotate: '360deg',ease: 'power2.in', delay: 5, stagger: .5});
 gsap.fromTo(".item-5", { opacity:0, scale:0, rotation:1040}, {duration: 1, delay:4, opacity:1, scale:1, rotation: 0})

 gsap.from(".item-6", { duration: 1, y: "-200%",ease: 'power2.in', delay: 4, stagger: .5});
 gsap.from(".item-7", { duration: 1, y: "-200%",ease: 'power2.in', delay: 5, stagger: .5});
 gsap.from(".new-in", { duration: 1, opacity: 1, delay: 7 });
// const timeline = gsap.timeline({ defaults: { duration: 1 }})
// timeline.from(".new-in", { opacity: 0, delay: 0 },);
// .from(".item-1", { y: "-150%", ease: "bounce", stagger: 0.5 },);
// .from(".item-2", { x: "-100vw", ease: "power1", stagger: 0.5 },);
// .from(".item-3", { x: "100vw", ease: "power2.in", stagger: 0.5 },);
// .from(".item-4", { x: "-200%", ease: "power2.in", stagger: 0.5 },);
// .fromTo(
//   ".item-5",
//   { opacity: 0, scale: 0, rotation: 1380 },
//   { opacity: 1, scale: 1, rotation: 0 }
// );

// .from(".item-6", { y: "-200%", ease: "power2.in", stagger: 0.5 },);
// .from(".item-7", { y: "-200%", ease: "power2.in", stagger: 0.5 },);
