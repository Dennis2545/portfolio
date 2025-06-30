// Script for the futuristic portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Random light trail animations
    const lightTrails = document.querySelectorAll('.light-trail');
    
    lightTrails.forEach(trail => {
        // Random starting delay
        const randomDelay = Math.random() * 5;
        // Random duration between 4-8s
        const randomDuration = 4 + Math.random() * 4;
        
        trail.style.animation = `light-run ${randomDuration}s linear ${randomDelay}s infinite`;
    });
    
    // Animate avatar eyes
    function blinkEyes() {
        const eyes = document.querySelector('.avatar-eyes');
        
        // Random blink interval
        setTimeout(() => {
            eyes.style.opacity = '0';
            
            // Open eyes after a short period
            setTimeout(() => {
                eyes.style.opacity = '1';
                blinkEyes();
            }, 150);
            
        }, 3000 + Math.random() * 4000);
    }
    
    blinkEyes();
    
    // Add interactive glow effect on hover
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon');
            icon.style.textShadow = `0 0 20px var(--glow-blue), 0 0 30px var(--glow-blue)`;
            
            // Intensify light trail
            const trail = this.querySelector('.light-trail');
            trail.style.opacity = '1';
            trail.style.height = '3px';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon');
            icon.style.textShadow = 'none';
            
            // Return light trail to normal
            const trail = this.querySelector('.light-trail');
            trail.style.opacity = '0.7';
            trail.style.height = '2px';
        });
        
        // Add click event for modal
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showModal(category);
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('contentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    
    function showModal(category) {
        // Set modal content based on category
        const content = getCategoryContent(category);
        modalTitle.textContent = content.title;
        modalContent.innerHTML = content.html;
        
        // Show modal
        modal.style.display = 'block';
    }
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Interactive contact button
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('click', function() {
        showContactModal();
    });
    
    // Free services modal
    const freeServiceBtn = document.querySelector('.free-service-btn');
    
    freeServiceBtn.addEventListener('click', function() {
        showFreeServicesModal();
    });
    
    // Add floating badges to some grid items
    function addFloatingBadges() {
        const badgeItems = [
            { category: 'apps', text: 'NEW' },
            { category: 'research', text: 'TRENDING' },
            { category: 'machine-learning', text: 'HOT' }
        ];
        
        badgeItems.forEach(item => {
            const gridItem = document.querySelector(`.grid-item[data-category="${item.category}"]`);
            if (gridItem) {
                const badge = document.createElement('div');
                badge.className = 'floating-badge';
                badge.textContent = item.text;
                gridItem.appendChild(badge);
            }
        });
    }
    
    addFloatingBadges();
    
    // Add typing effect to tagline
    function addTypingEffect() {
        const tagline = document.querySelector('.tagline');
        if (tagline) {
            const text = tagline.textContent;
            tagline.textContent = '';
            
            let charIndex = 0;
            const typing = setInterval(() => {
                if (charIndex < text.length) {
                    tagline.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }
    }
    
    // Delay typing effect for visual interest
    setTimeout(addTypingEffect, 500);
    
    // Add pulse effect to the flame line
    function addPulseEffect() {
        const flames = document.querySelector('.flames');
        if (flames) {
            setInterval(() => {
                flames.style.filter = 'hue-rotate(30deg) brightness(1.3)';
                
                setTimeout(() => {
                    flames.style.filter = '';
                }, 500);
            }, 3000);
        }
    }
    
    addPulseEffect();

    // Add background particles
    function createBackgroundEffect() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.4';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Particles array
        const particles = [];
        const particleCount = 50;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                color: `rgba(0, ${Math.floor(132 + Math.random() * 78)}, ${Math.floor(200 + Math.random() * 55)}, ${Math.random() * 0.5 + 0.1})`,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25
            });
        }
        
        // Animation function
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Move particles
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Boundary checking
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                
                // Draw particles
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });
        }
        
        animate();
        
        // Resize canvas on window resize
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    createBackgroundEffect();
    
    // Contact modal
    function showContactModal() {
        modalTitle.textContent = "Contact Me";
        modalContent.innerHTML = `
            <div class="contact-form">
                <div class="contact-info">
                    <h3>Dennis Maran</h3>
                    <p>Phone: 0702290320</p>
                    <p>Email: marantech002@gmail.com</p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
        `;
        
        // Additional CSS for the form
        const style = document.createElement('style');
        style.textContent = `
            .contact-form {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .contact-info {
                background: rgba(0, 20, 40, 0.3);
                border: 1px solid var(--glass-border);
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 10px;
            }
            
            .contact-info h3 {
                color: var(--light-blue);
                margin-bottom: 10px;
            }
            
            .contact-info p {
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 5px;
            }
            
            .social-links {
                display: flex;
                gap: 15px;
                margin-top: 15px;
            }
            
            .social-icon {
                color: var(--glow-blue);
                font-size: 1.5rem;
                transition: all 0.3s;
            }
            
            .social-icon:hover {
                transform: translateY(-3px);
                color: var(--light-blue);
            }
            
            .form-group {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .form-group label {
                color: var(--light-blue);
            }
            
            .futuristic-input {
                background: rgba(0, 20, 40, 0.3);
                border: 1px solid var(--glass-border);
                border-radius: 8px;
                color: white;
                padding: 12px;
                font-family: 'Orbitron', sans-serif;
                outline: none;
                transition: all 0.3s ease;
            }
            
            .futuristic-input:focus {
                border-color: var(--accent-blue);
                box-shadow: 0 0 15px rgba(0, 132, 255, 0.3);
            }
            
            .send-btn {
                background: linear-gradient(to right, var(--accent-blue), var(--glow-blue));
                border: none;
                border-radius: 8px;
                color: white;
                padding: 12px;
                font-family: 'Orbitron', sans-serif;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-top: 10px;
            }
            
            .send-btn:hover {
                box-shadow: 0 0 15px rgba(0, 210, 255, 0.5);
                transform: translateY(-2px);
            }
        `;
        
        document.head.appendChild(style);
        modal.style.display = 'block';
    }
    
    // Sample content for each category
    function getCategoryContent(category) {
        const contents = {
            'apps': {
                title: 'ROBOTICS & PROGRAMMING',
                html: `
<div class="category-content">
    <div class="item">
        <h3>Raspberry Pi Robot Car</h3>
        <p>An autonomous vehicle with obstacle avoidance capabilities, controlled via Raspberry Pi GPIO and Python. Features both manual and autonomous driving modes.</p>
        <div class="tech-stack">Python · Raspberry Pi · gpiozero · L298N · Ultrasonic Sensor</div>
        <button class="action-btn" onclick="window.open('../portfolio/robotics/raspberry_1.html', '_blank')">
            <i class="fas fa-external-link-alt"></i> View Project Details
        </button>
    </div>
</div>


<div class="category-content">
    <div class="item">
        <h3>Arduino + Raspberry Pi Robot Car</h3>
        <p>An autonomous vehicle with real-time obstacle avoidance combining Arduino's motor control precision with Raspberry Pi's computer vision capabilities. Features hybrid control architecture with manual override via web interface.</p>
        <div class="tech-stack">
            <span>C++ (Arduino)</span>
            <span>Python (Raspberry Pi)</span>
            <span>Flask Web Interface</span>
        </div>
        <button class="action-btn" onclick="window.open('../portfolio/robotics/arduino_1.html', '_blank')">
            <i class="fas fa-robot"></i> View Full Project
        </button>
    </div>
</div>

<div class="category-content">
    <div class="item">
        <h3>Arduino and Raspberry pi</h3>
        <p>An autonomous vehicle with obstacle avoidance capabilities, controlled via Raspberry Pi GPIO and Python. Features both manual and autonomous driving modes.</p>
        <div class="tech-stack">Python · Raspberry Pi · gpiozero · L298N · Ultrasonic Sensor</div>
        <button class="action-btn" onclick="window.open('../portfolio/robotics/raspandarduino_1.html', '_blank')">
            <i class="fas fa-external-link-alt"></i> View Project Details
        </button>
    </div>
</div>
                        <div class="item">
                            <h3>Data Visualization Tool</h3>
                            <p>An interactive application that transforms complex datasets into intuitive visual representations.</p>
                            <div class="tech-stack">Electron · D3.js · Node.js</div>
                        </div>
                        <div class="item">
                            <h3>Productivity Tracker</h3>
                            <p>A cross-platform app that helps users monitor their productivity and optimize their workflow.</p>
                            <div class="tech-stack">Flutter · Firebase · SQLite</div>
                        </div>
                    </div>
                `
            },
	// Update the research section
'research': {
    title: 'RESEARCH',
    html: `
        <div class="category-content">
            <div class="item">
                <h3>Heart Attack analysis</h3>
                <p>Developing predictive models that can quantify the 
likelihood of heart attacks is an important step towards lowering this burden, which could have 
far-reaching consequences across society.</p>
                <a href="research/Heart attacks Analysis.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
            <div class="item">
                <h3>Layout Planning Models</h3>
                <p> Essential tools in operations management and industrial engineering 
that help optimize the arrangement of facilities, equipment, and workspaces within a manufacturing or 
service environment. </p>
                <a href="research/Layout Planning Models.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
            <div class="item">
                <h3>Risk management practices in Malaysian construction</h3>
                <p>This study investigates risk management practices in Malaysian construction projects, focusing on 
their influence on project success. The construction industry in Malaysia faces complex 
challenges, including resource constraints, regulatory compliance, and external uncertainties, 
making effective risk management essential. Through a mixed-method approach combining 
quantitative data from surveys and qualitative insights from interviews with industry professionals, 
this research identifies critical factors that impact risk mitigation and project outcomes. Key 
findings reveal that proactive risk identification, comprehensive planning, and stakeholder 
involvement are vital in minimizing delays, cost overruns, and quality issues. Organizational 
culture, the level of expertise in risk management, and the integration of technology further 
influence the effectiveness of these practices. The study highlights significant gaps, including 
inconsistent risk assessment frameworks and inadequate communication among stakeholders, 
which hinder optimal project execution. Practical recommendations include adopting standardized 
risk management protocols, enhancing training programs, and leveraging digital tools such as 
Building Information Modeling (BIM) for real-time risk monitoring. The findings contribute to 
the theoretical understanding of risk management in construction and provide actionable insights 
for practitioners, policymakers, and academics. Future research should explore the long-term 
impacts of emerging technologies and evolving industry regulations on risk management practices. 
This study underscores the importance of robust risk management strategies as a cornerstone for 
achieving sustainable success in Malaysian construction projects</p>
                <a href="research/analysis_!.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
      

            <div class="item">
                <h3>Card draw mechanics in Absolute Zenless zero zone</h3>
                <p> The number one goal of this study looks at is to research and examine the chances 
related to the card draw mechanics in Absolute Zenless zero zone, this will be accomplished 
by means of the use of mathematical tools, such as binomial distribution, to version the 
likelihood of unique consequences, and chi-sqaure assessments to assess how determined 
consequences align with predicted chances. moreover, recurrence formulas will describe the 
possible consequences over repeated trials. collectively, these analyses will provide a 
complete expertise of the sport's behavior, fairness, and underlying probabilistic structure. </p>
                <a href="research/analysis_2.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
			 </div>
		
    `
},

		
		
		
            'art-cites': {
                title: 'AUTOMATION',
                html: `
<div class="category-content">
    <div class="item">
        <h3>Trading Automation System</h3>
        <p>trading system that autonomously executes trades based on market volatility and price trends, implementing sophisticated risk management protocols.</p>
        <div class="tech-stack">Python · Raspberry Pi · Deriv api · xml</div>
        <button class="action-btn" onclick="window.open('../portfolio/automation/trading_automation.html', '_blank')">
            <i class="fas fa-external-link-alt"></i> View Project Details
        </button>
    </div>
<div class="category-content">
    <div class="item">
        <h3>AI-powered news generation and distribution system</h3>
        <p>I engineered an AI-powered news generation and distribution system that automatically curates, summarizes, and publishes news content with human-like quality.</p>
        <div class="tech-stack">Python · Raspberry Pi · Html </div>
        <button class="action-btn" onclick="window.open('../portfolio/automation/ai_automation.html', '_blank')">
            <i class="fas fa-external-link-alt"></i> View Project Details
        </button>
    </div>
    </div>
                `
            },

// Update the articles section
'articles': {
    title: 'ARTICLES',
    html: `
        <div class="category-content">
            <div class="item">
                <h3>Earth‘s history</h3>
                <p>The planet Earth has a more than 4.6 billion year history, over the course of which it has undergone substantial changes in the conditions it offers life. All living organisms have had to
adapt to these changes; those that were unable died out. However the survivors have also contributed to the creation and alteration of these life conditions. This process of mutual
influence between different elements of the environment is called coevolution, and it has contributed considerably to changing our planet.</p>
                <div class="publication">Published in Lifeliqe's lesson plan!</div>
                <a href="articles/presentation2.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
            <div class="item">
                <h3>Using Learning Analytics to Explore Responses from
Student Conversations with Chatbot</h3>
                <p>The planet Earth has a more than 4.6 billion year history, over the course of which it has undergone substantial changes in the conditions it offers life. All living organisms have had to
adapt to these changes; those that were unable died out. However the survivors have also contributed to the creation and alteration of these life conditions. This process of mutual
influence between different elements of the environment is called coevolution, and it has contributed considerably to changing our planet.</p>
                <div class="publication">Published in Lifeliqe's lesson plan!</div>
                <a href="articles/chatbot_analysis.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
            <div class="item">
                <h3>Tourism industry plays a vital role in the country's economy . It is important to
have a lot of tourist attractions like beautiful beaches , mountains or some
historical buildings. These are primary tourism resources . It is also important to
develop communication networks , accommodation , gastronomy and
secondary tourism resources. Based on this, some particular types of tourism
start to develop . One example of tourism is Dark tourism. Dark tourism refers
to a type of tourism that involves visiting places that are associated with
death, tragedy, or suffering. These places could be sites of historical
events such as war zones, prisons, concentration camps, or places of
natural disasters like sites of earthquakes or volcanic eruptions</p>
                <div class="publication">Published in Lifeliqe's lesson plan!</div>
                <a href="articles/industry_analysis.pdf" class="pdf-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            </div>
        </div>
    `
},
'projects': {
    title: 'WEBSITE',
    html: `
        <div class="category-content">
            <div class="item">
                <h3>Familiar Technology</h3>
             
                <div class="tech-stack">React · Node.js · MongoDB · Django. PHP. Wordpress</div>
            </div>
            
            <p style="margin: 25px 0 15px; text-align: center; color: #8892b0;">
                Explore my complete web development journey including projects built from scratch, debugging work, and early experiments.
            </p>
            
            <div style="text-align: center;">
                <a href="../portfolio/website_samples/website_samples.html" 
                   style="display: inline-block; 
                          padding: 12px 30px; 
                          background: linear-gradient(135deg, #0066ff, #00d2ff); 
                          color: white; 
                          border-radius: 8px; 
                          text-decoration: none; 
                          font-weight: 600;
                          transition: all 0.3s ease;
                          box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);">
                    View Website Samples
                </a>
            </div>
        </div>
    `
},
            'data': {
                title: 'DATA COLLECTED',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>User Interaction Patterns</h3>
                            <p>Comprehensive dataset of how users interact with various digital interfaces and applications.</p>
                        </div>
                        <div class="item">
                            <h3>Environmental Monitoring</h3>
                            <p>Collection of environmental data from various sensors deployed in urban and natural settings.</p>
                        </div>
                        <div class="item">
                            <h3>AI Training Datasets</h3>
                            <p>Curated collections of labeled data for training machine learning models across various domains.</p>
                        </div>
                    </div>
                `
            },
            'visualization': {
                title: 'VISUALIZATION',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Global Data Trends</h3>
                            <p>Interactive visualizations representing worldwide patterns and correlations in various datasets.</p>
                        </div>
                        <div class="item">
                            <h3>Network Analysis Tools</h3>
                            <p>Visual representations of complex networks and connection patterns between data points.</p>
                        </div>
                        <div class="item">
                            <h3>Temporal Data Exploration</h3>
                            <p>Dynamic visualizations showing how data evolves and changes over different time scales.</p>
                        </div>
                    </div>
                `
            },
            'powerpoint': {
                title: 'POWERPOINT',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Future Technology Trends</h3>
                            <p>A visually striking presentation exploring emerging technologies and their potential impact.</p>
                        </div>
                        <div class="item">
                            <h3>AI Ethics and Implementation</h3>
                            <p>A comprehensive overview of ethical considerations and practical applications of AI systems.</p>
                        </div>
                        <div class="item">
                            <h3>Data Visualization Strategies</h3>
                            <p>Educational presentation on effective techniques for representing complex data visually.</p>
                        </div>
                    </div>
                `
            },
            'machine-learning': {
                title: 'MACHINE LEARNING',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Predictive Analysis System</h3>
                            <p>An advanced machine learning model that forecasts trends and outcomes based on historical data.</p>
                            <div class="tech-stack">Python · TensorFlow · Scikit-learn · PyTorch</div>
                        </div>
                        <div class="item">
                            <h3>Natural Language Processing Tool</h3>
                            <p>A sophisticated system for analyzing and generating human language with nuanced understanding.</p>
                            <div class="tech-stack">Python · BERT · GPT · spaCy</div>
                        </div>
                        <div class="item">
                            <h3>Computer Vision Application</h3>
                            <p>A machine learning system that can identify, classify, and track objects in images and video.</p>
                            <div class="tech-stack">Python · OpenCV · TensorFlow · YOLO</div>
                        </div>
                    </div>
                `
            },
            'reports': {
                title: 'REPORTS',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Annual Technology Impact Assessment</h3>
                            <p>A comprehensive analysis of how emerging technologies are transforming various industries.</p>
                        </div>
                        <div class="item">
                            <h3>User Experience Research Findings</h3>
                            <p>Detailed insights from user testing and interaction analysis across multiple platforms.</p>
                        </div>
                        <div class="item">
                            <h3>Market Analysis and Future Projections</h3>
                            <p>In-depth evaluation of current market conditions and forecasts for technological developments.</p>
                        </div>
                    </div>
                `
            },
            'reports-alt': {
                title: 'REPORTS ARCHIVE',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Quarterly Innovation Summary</h3>
                            <p>Regular reports tracking developments and breakthroughs in technology and related fields.</p>
                        </div>
                        <div class="item">
                            <h3>Project Outcome Assessments</h3>
                            <p>Evaluations of completed projects, including successes, challenges, and lessons learned.</p>
                        </div>
                        <div class="item">
                            <h3>Industry Trend Analysis</h3>
                            <p>Reports examining shifting patterns and emerging opportunities across technological sectors.</p>
                        </div>
                    </div>
                `
            },
            'games': {
                title: 'GAMES DEVELOPED',
                html: `
                    <div class="category-content">
                        <div class="item">
                            <h3>Neural Network Playground</h3>
                            <p>An educational game that teaches principles of machine learning through interactive challenges.</p>
                            <div class="tech-stack">Unity · C# · TensorFlow.js</div>
                        </div>
                        <div class="item">
                            <h3>Data Defender</h3>
                            <p>A strategy game where players must protect digital assets from various security threats.</p>
                            <div class="tech-stack">Godot · GDScript · WebGL</div>
                        </div>
                        <div class="item">
                            <h3>Algorithm Adventure</h3>
                            <p>A puzzle game that introduces computational thinking and algorithm design concepts.</p>
                            <div class="tech-stack">JavaScript · Three.js · React</div>
                        </div>
                    </div>
                `
            }
        };
        
     // Add some styling for the modal content
const style = document.createElement('style');
style.textContent = `
    .category-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .item {
        background: rgba(0, 20, 40, 0.5);
        border: 1px solid var(--glass-border);
        border-radius: 10px;
        padding: 20px;
        transition: all 0.3s ease;
    }
    
    .item:hover {
        box-shadow: 0 0 15px rgba(0, 132, 255, 0.3);
        transform: translateY(-2px);
    }
    
    .item h3 {
        color: var(--glow-blue);
        margin-bottom: 10px;
        font-weight: 500;
    }
    
    .item p {
        margin-bottom: 10px;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
    }
    
    .tech-stack, .publication {
        font-size: 0.9rem;
        color: var(--accent-blue);
        margin-top: 10px;
        font-style: italic;
    }
    
    .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--accent-blue), var(--glow-blue));
        color: white;
        padding: 10px 20px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 0.9rem;
        margin-top: 15px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 132, 255, 0.25);
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 0.5px;
        font-style: normal;
    }
    
    .action-btn i {
        margin-right: 8px;
        font-size: 0.9em;
    }
    
    .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 210, 255, 0.4);
        background: linear-gradient(135deg, var(--light-blue), var(--glow-blue));
    }
    
    .action-btn:active {
        transform: translateY(0);
    }
    
    /* Tech stack specific styling */
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 15px 0;
    }
    
    .tech-stack span {
        background: rgba(0, 132, 255, 0.15);
        padding: 4px 10px;
        border-radius: 12px;
        border: 1px solid rgba(0, 132, 255, 0.3);
        font-style: normal;
        font-size: 0.8rem;
    }
`;
        
        document.head.appendChild(style);
        
        return contents[category] || {
            title: 'Content Coming Soon',
            html: '<p>Detailed information for this section is currently being developed.</p>'
        };
    }
});
