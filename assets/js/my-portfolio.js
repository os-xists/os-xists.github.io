let title="Oluwa Seyi Hub";
let site_name="Oluwa Seyi Hub";
let name="Oluwa Seyi";
let email="oluseyi.bankole2021@gmail.com";
let phone="+2349064732951";
let address="Nigeria, Ogun State, Abeokuta";
let profession="Web Developer, Wordpress Developer, Android app developer, Freelancer";

let summary=` <p><em>I am an Innovative and deadline-driven Web Developer with 3+ years of experience designing and developing user-friendly websites from initial concept to final, polished deliverable.</em></p>`;
              
let aboutme=`
<p>                
Highly skilled web developer with 3 years of experience in building visually stunning and functional websites. Proficient in HTML, CSS, and WordPress, with a strong passion for delivering top-notch digital solutions.
</p>
<p>
<strong>Technical Skills</strong>
</p>
<p>
- HTML: Structuring and semantic markup
<br>
- CSS: Styling, layout, and responsive design
<br>
- Javascript/Jquery - Dom manipulation
<br>
- WordPress: Content management, and plugin customization
<br>
- Android app development: Using cutting-edge technologies like HTML, CSS and JavaScript within a native shell
</p>
<p>
<strong>Experience</strong>
</p>
<p>
3 years of experience in web development, with a proven track record of delivering projects on time and to client satisfaction.
</p>
<p>
<strong>Strengths</strong>
</p>
<p>
- Strong understanding of front-end development principles
<br>
- Excellent problem-solving skills and attention to detail
<br>
- Ability to work independently and collaboratively as part of a team
<br>
- Commitment to staying up-to-date with the latest web development trends and technologies
</p>
`;


document.title=title;

$(".my-sitename").html(site_name);
$(".my-name").html(name);
$(".my-email").html(email);
$(".my-phone").html(phone);
$(".my-address").html(address);
$(".my-profession").html(profession);
$(".my-hero-profession").attr("data-typed-items", profession);

$(".my-aboutme").html(aboutme);
$(".my-summary").html(summary);

$(".my-menu").html(`<li><a href="index.html" class="active">Home</a></li>
          <li><a href="about.html" class="">About</a></li>
          <li class="d-none"><a href="resume.html">Resume</a></li>
          <li><a href="services.html">Services</a></li>
          <li class="d-none"><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">Contact</a></li>`);
          
$(".my-social").html(`<a href="#" class="twitter d-none"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook d-none"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram d-none"><i class="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/seybanks" class="linkedin d-none"><i class="bi bi-linkedin"></i></a>
`);

/*Skills progress*/

let skills=[
{ title:"HTML",
 progress: 100
 },
 { title:"CSS",
 progress: 90
 },
 { title:"JAVASCRIPT/JQUERY",
 progress: 75
 },
 { title:"WORDPRESS",
 progress: 90
 },
 { title:"ANDROID APP DEVELOPMENT",
 progress: 55
 }
 ]
 
 $.each( skills, function(i, result){
	 $(".my-skills-progress").append(`<div class="progress">
                <span class="skill"><span>${result.title}</span> <i class="val">${result.progress}%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="${result.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div><!-- End Skills Item -->
              `);
  });



let services=[ 
{ 
	 title:"Responsive web design",
	info:"",
	icon: "bi-building"
	},
	{ 
	 title:"Wordpress Development",
	info:"",
	icon: "bi-wordpress"
	},
	{ 
	 title:"E-commerce and Online store solution",
	info:"",
	icon: "bi-cart"
	},
	{ 
	 title:"Android development",
	info:"",
	icon: "bi-android"
	}
]

$.each( services, function(i, result){
	 $(".my-services").append(`<div class="col-lg-4 col-6 mt-3" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item  position-relative">
              <div class="icon">
                <i class="bi ${result.icon}"></i>
              </div>
              <a href="#" class="stretched-link">
                <h3>${result.title}</h3>
              </a>
              <p>${result.info}</p>
            </div>
          </div><!-- End Service Item -->
`);
});


let testimonial=[
{
  name:"Olusola Ojo",
  profession:"Journalist",
  message: "I've been working with Oluwa Seyi for several years now, and I'm consistently impressed by their professionalism, expertise, and dedication to delivering high-quality results.",
  icon:"assets/img/testimonials/1.jpg?i=1"
  }
  ,
  {
  name:"Segun Banks",
  profession:"Ceo & Founder",
  message: "Since Oluwa Seyi launched my new website, I've seen a significant increase in online engagement and sales. Their expertise in website development has been a game-changer for my business.",
  icon:"assets/img/testimonials/2.jpg?i=1"
  },
  {
  name:"Wunmi Leshi",
  profession:"Blogger",
  message: "I needed a website that would showcase my business's unique services. Oluwa Seyi demonstrated exceptional expertise in website development, and the final result exceeded my expectations.",
  icon:"assets/img/testimonials/3.jpg?i=1"
  }
  ]


$.each( testimonial, function(i, result){	

	 $(".swiper-wrapper").append(`<div class="swiper-slide">
              <div class="testimonial-item">
                <img src="${result.icon}" class="testimonial-img" alt="">
                <h3>${result.name}</h3>
                <h4 class="t-1-profession">${result.profession}</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>${result.message}</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->
`);
	});