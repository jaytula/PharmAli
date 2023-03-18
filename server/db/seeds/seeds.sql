INSERT INTO users (name, email, password, postal_code)
VALUES 
('Michael', 'michael.lawson@gmail.com', 'Password@123', 'M3H 0C3'),
('Lindsay', 'lindsay.ferguson@gmail.com', 'Password@123', 'M4B 0A3'),
('Tobias', 'tobias.funke@gmail.com', 'Password@123', 'M3C 0E4'),
('Byron', 'byron.fields@gmail.com', 'Password@123', 'M4C 1Z1'),
('Rachel', 'rachel.howell@gmail.com', 'Password@123', 'M3H 5J8');

INSERT INTO blogs (user_id, title, image_url, content, category_id, created_at)
VALUES
(3,'Olanzapine: wish I knew earlier','https://5.imimg.com/data5/SELLER/Default/2022/1/VU/BB/BY/13166357/olanzapine-ip-5mg--500x500.jpg', 'If Im honest, I had very little choice when it came to taking olanzapine. I was depressed, severely underweight, anxious and unable to sleep - and I was a hospital inpatient. I got to a point of just wanting, or needing, to hand over control, to stop the noise in my head, pause the constant racing thoughts in my mind. To be able to just be still, rest, not have to fight myself anymore. Olanzapine gave me that opportunity in a way. It gave me peace for the first time in months. It didnt stop the pain or the anxiety, but it gave me the ability to rest, sleep, and relax. Olanzapine is a drug that is feared particularly for the notorious weight-gain side effect, which, if Im honest, is one of the reasons I refused it several times before actually taking it.', 2, 2022-04-27),
(1, 'Amoxicillin VS Penicillin', 'https://c8.alamy.com/zooms/9/8e2d3ab9e3554a87ba6d1b31629e8b3f/k67j3g.jpg','My doctor perscribed me Amoxicillin instead of Penicillin. One advantage of amoxicillin over penicillin is that it is effective against a broader range of bacteria. Bad tooth infection and dentist gave Amoxicillin 3 x 500 mg a day. Day 3 no side effects and pain gone/swelling reducing. For penicillin, this was given for my sons lyme disease. Penicllin must be used long term. Got my son well in 9 months.', 3, 2022-11-20),
(3, 'Cosentyx medication does not help Psoriatic Arthritis', 'https://assets.medpagetoday.net/media/images/90xxx/90366.jpg', 'I am not sure yet if it is coincident or not, but shortly after starting Cosentyx, I experienced extreme pain while urinating to the point of even passing blood. I was taken off the medication for approximately 2 months for other medical issue including UTI and started seeing a slight improvement.I was given the start up dose again because of the gap in treatment and by 3rd shot (start up dose) I was experiencing extreme pain again. I have been taken off the medication again to see if the bladder pain will improve. Not thinking what I am experiencing is worth taking the medication. While on the medication I do not feel there was any improvement to the arthritis pain.', 4, 2023-01-21), 
(3, 'How 1 Percocet percription triggered my addiction','https://www.hematologyadvisor.com/wp-content/uploads/sites/14/2019/01/882ad5a9eebb4e7a9b2eb40071df8f6c-percocet_349841.jpg' , ' I was exposed to meningitis. Coincidentally, I became very ill a couple of days later with persistent high fevers. After taking Percocet every 4 h around the clock, the pain went away. The best way I can describe the feeling I had when taking the Percocet is that all was right with the world. I felt that I could function at a higher level, and that I had more energy and motivation. Stressful situations seemed easily manageable, and I felt more focused on whatever I happened to be doing. I did not perceive that anything was wrong with taking the Percocet after the reason it was prescribed had resolved, because after all, they had been prescribed to me. Maybe I did know better, but the feeling I received from the medication pushed any questions I might have had out of my head. I am now a recovering addict and can say becareful to not take a medication out of hand.', 2, 2023-03-01); 

INSERT INTO comments (user_id, comment, blog_id, created_at)
VALUES 
(5, 'OMG! I feel the same way I feel like it really helped with my depression I was on 10mg for 25 years. I feel like this medicaition is a life-saver. I recommend this to anyone who is suffering with severe insomnia'),
(3, 'My son is suffering from this addiction, he got perscribed it for the first time for his injury. He thought the feeling was so nice he continues to buy them off the streets and is currently addicted. I am thinking to send him to REHAB but he is mentally addicted and ignores me when I try to bring it up. I am happy your now fully recovered...I hate PERCOCETS!!');
(5, 'OMG! I feel the same way I feel like it really helped with my depression I wasn on 10mg for 25 years. I feel like this medicaition is a life-saver. I recommend this to anyone who is suffering with severe insomnia', 1, 2022-12-27),
(3, 'My son is suffering from this addiction, he got perscribed it for the first time for his injury. He thought the feeling was so nice he continues to buy them off the streets and is currently addicted. I am thinking to send him to REHAB but he is mentally addicted and ignores me when I try to bring it up. I am happy your now fully recovered...I hate PERCOCETS!!', 4, 2023-02-27);

INSERT INTO articles (title, image_url, article_url)
VALUES
('Pharmedica USA LLC Issues Voluntary Worldwide Recall of Purely Soothing 15% MSM Drops Due to Non-Sterility','https://www.fda.gov/files/styles/recall_image_large/public/30ml.jpg?itok=QxW5roPH', 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/pharmedica-usa-llc-issues-voluntary-worldwide-recall-purely-soothing-15-msm-drops-due-non-sterility'),
('IBSA Pharma Inc. Issues Voluntary Nationwide Recall of Select Lots of TIROSINT®-SOL (levothyroxine sodium) Oral Solution Due to Subpotency','https://dev.rodpub.com/images/172/051_350.jpg', 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/ibsa-pharma-inc-issues-voluntary-nationwide-recall-select-lots-tirosintr-sol-levothyroxine-sodium'),
('Edgewell Personal Care Issues Voluntary Nationwide Recall of Banana Boat Hair & Scalp Sunscreen Due to the Presence of Benzene', 'https://cdn.shopify.com/s/files/1/0551/0728/9293/products/Hair_and_Scalp_Spray_FRONT.jpg?v=1624388569', 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/edgewell-personal-care-issues-voluntary-nationwide-recall-banana-boat-hair-scalp-sunscreen-due-0');

INSERT INTO saved_medications (user_id, name)
VALUES
(1, 'Olanzapine'),
(1, 'Caffeine'),
(1, 'Ibuprofen'),
(3, 'Codeine'),
(4, 'Percocet'),
(4, 'Cosentyx'),
(3, 'Naproxen'),
(3, 'Indocin');

INSERT INTO categories (name)
VALUES 
('Liquids'),
('Tablets'),
('Capsules'),
('Injections');

INSERT INTO journals (user_id, text, created_at)
VALUES 

(3,'On August 3rd, I was at my high school graduation party when I noticed all my friends celebrating in a corner. I came to congratulate everyone and was handed a pill in my hand "It is s time to enjoy !" I didnt think one pill could change my life the way that it did but unfortunately it did. I thought it would be fun and it was temporary, then I wanted more and so my addiction continues...', 2022-08-03),
(3, 'On March 3rd I can fully say I have never been more happier in my life. I am proud to be able to say that I am fully recovered addict. I went to REHAB annd no longer addicted to those pill. I am so happy to be able to look back and reflect on the change that has taken place. I want to start a club to help others recover from there addictions too.', 2023-03-03); 
