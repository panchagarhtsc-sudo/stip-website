// মোবাইল মেনু টগল
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // আইকন পরিবর্তন
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // নোটিশ স্লাইডার (সরল ভার্সন)
    const noticeItems = document.querySelectorAll('.notice-item');
    let currentNotice = 0;
    
    if (noticeItems.length > 1) {
        // প্রথম নোটিশ দেখানো
        noticeItems[0].style.display = 'block';
        for (let i = 1; i < noticeItems.length; i++) {
            noticeItems[i].style.display = 'none';
        }
        
        // প্রতি ৫ সেকেন্ডে নোটিশ পরিবর্তন
        setInterval(function() {
            noticeItems[currentNotice].style.display = 'none';
            currentNotice = (currentNotice + 1) % noticeItems.length;
            noticeItems[currentNotice].style.display = 'block';
        }, 5000);
    }
    
    // ফর্ম ভ্যালিডেশন (যোগাযোগ ফর্মের জন্য)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // সরল ভ্যালিডেশন
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (name.length < 3) {
                alert('দয়া করে আপনার পূর্ণ নাম লিখুন');
                return false;
            }
            
            if (phone.length < 11) {
                alert('দয়া করে সঠিক মোবাইল নম্বর লিখুন');
                return false;
            }
            
            if (message.length < 10) {
                alert('দয়া করে আপনার মেসেজ বিস্তারিত লিখুন');
                return false;
            }
            
            // সাবমিট করার এনিমেশন
            const submitBtn = document.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> পাঠানো হচ্ছে...';
            submitBtn.disabled = true;
            
            // সিমুলেটেড সাবমিশন
            setTimeout(function() {
                alert('আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // কার্ড হোভার এফেক্ট এনহ্যান্স
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // স্ক্রল টু টপ বাটন
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '30px';
    scrollTopBtn.style.right = '30px';
    scrollTopBtn.style.width = '50px';
    scrollTopBtn.style.height = '50px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.backgroundColor = '#3498db';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.fontSize = '1.2rem';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.zIndex = '1000';
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
});