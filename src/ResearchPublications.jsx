import React from 'react';
import './ResearchPublications.css';
import authorImg from './assets/author.png';

// Page images
import page1 from './assets/page1.png';
import page2 from './assets/page2.png';
import page3 from './assets/page3.png';
import page4 from './assets/page4.png';
import page5 from './assets/page5.png';
import page6 from './assets/page6.png';
import page8 from './assets/page8.png';
import page9 from './assets/page9.png';
import page10 from './assets/page10.png';
import page11 from './assets/page11.png';
import page12 from './assets/page12.png';
import page13 from './assets/page13.png';
import page14 from './assets/page14.png';
import page15 from './assets/page15.png';
import page16 from './assets/page16.png';

// Book images
import book1 from './assets/book1.png';
import book2 from './assets/book2.png';
import book3 from './assets/book3.png';
import book4 from './assets/book4.png';
import book5 from './assets/book5.png';
import book6 from './assets/book6.png';


const journalPapers = [
  {
    id: 1, acronym: "IJCIS",
    publisher: "Springer Nature",
    journal: "Int. Jour. Comp. Intelli Sys.",
    authors: "Saifullah Khalid, Shashi Kant Gupta, Midhun Chakkaravarthy, D. K. Nishad, Dharmendra Prakash, Alkesh Agrawal",
    title: "“Multi-modal AI-Enabled UAV Network for Fog Dispersal and Runway-Visibility Enhancement at an International Airport”",
    source: "International Journal of Computational Intelligence Systems (Springer Nature), Vol. 19, pp. (57) 1-62, 2026.",
    indexing: "Indexed in WoS-SCIE, I.F 3.3", issn_isbn: "ISSN: 1875-6883",
    doi_url: "https://doi.org/10.1007/s44196-025-01149-z",
    image: page1,
  },
  {
    id: 2, acronym: "IJMOT", publisher: "IJMOT", journal: "Int. J. Micr. & Opt. Tech.",
    authors: "Bhagwant Singh, Alkesh Agrawal*, Supriya, Alka Yadav",
    title: "“Multi-Band with Ultra Wide-Band Square Circular and Cross Shaped Resonators Based Metamaterial Absorber for Stealth and 5G Applications”",
    source: "International Journal of Microwave and Optical Technology, Vol. 21, no. 1, pp. 58-66, Jan., 2026.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISSN: 1553-0396",
    doi_url: "https://ijmot.com/VOL-21-NO-1.aspx", image: authorImg,
    techImage: "https://alkesh-agrawal.github.io/personal-web-page/alkesh_mma1.png",
   image: page2,

   
  },
  {
    id: 3, acronym: "IJASS", publisher: "Springer Nature", journal: "Int. Jour. Aero. & Space Sc.",
    authors: "Saifullah Khalid, Sashi Kant Gupta, Midhun Chakkaravarthy, Dharmendra Prakash, Alkesh Agrawal, D. K. Nishad",
    title: "“AI-Optimized UAV Swarm System for Radiation Fog Dispersal and Runway Visibility Enhancement at Airport”",
    source: "International Journal of Aeronautical and Space Science (Springer Nature), Vol. 27, no. 1, 2025.",
    indexing: "Indexed in WoS-SCIE, I.F 1.6", issn_isbn: "ISSN: 2093-2480",
    doi_url: "https://doi.org/10.1007/s42405-025-01097-0",
    image:page3,
  },
  {
    id: 4, acronym: "IEEE", publisher: "IEEE", journal: "IEEE-Xplore",
    authors: "Bhagwant Singh, Alkesh Agrawal",
    title: "“C and Inverted-C Shaped Multi-band Metamaterial Absorber”",
    source: "2024 International Conference on Control, Computing, Communication and Materials (ICCCCM) ... 2024.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Electronic ISBN: 979-8-3503-7872-6",
    doi_url: "https://ieeexplore.ieee.org/document/11039930", image: page4
  },
  {
    id: 5, acronym: "IEEE", publisher: "IEEE", journal: "IEEE-Xplore",
    authors: "Dharmendra Prakash, Alkesh Agrawal, Saifullah Khalid, Dinesh Kumar Nisha, Vinay Kumar Singh",
    title: "\"Innovative Approaches to Fog Dispersal: The Emerging Role of Unmanned Aerial Vehicles,\"",
    source: "2024 IEEE 11th Uttar Pradesh Section International Conference (UPCON) ... 2024.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Electronic ISBN: 979-8-3503-7873-3",
    doi_url: "https://ieeexplore.ieee.org/document/10983532", image: page5,
  },
  {
    id: 6, acronym: "PIER-M", publisher: "PIER", journal: "PIER M",
    authors: "Sunil K. Dubey, Ashok Kumar Shankhwar, Nand Kishore, and Alkesh Agrawal*",
    title: "\"High Gain and Bandwidth Enhanced Microstrip Patch Antenna with Defective Ground Structure Loaded with Metamaterial Unit Cells for Intelligent Transportation Systems,\"",
    source: "Progress In Electromagnetics Research M, Vol. 136, 57-67, 2025.",
    indexing: "Indexed in WoS-SCIE, I.F 0.8", issn_isbn: "ISSN: 1937-8726",
    doi_url: "https://www.jpier.org/issues/volume.html?paper=25101001",
    techImage: "https://alkesh-agrawal.github.io/personal-web-page/alkesh_anth2.png",
     image: page6,
  },
  {
    id: 7, acronym: "IJMOT", publisher: "IJMOT", journal: "IJMOT",
    authors: "Bhagwant Singh, Alkesh Agrawal*, Supriya, Alka Yadav",
    title: "\"Quad Circular with Plus Shaped Resonators Based Multi-Band Metamaterial Absorber”",
    source: "International Journal of Microwave and Optical Technology, Vol. 20, no. 3, pp. 243-250, Jun., 2025.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISSN: 1553-0396",
    doi_url: "https://ijmot.com/VOL-20-NO-3.aspx", image: page2,
    techImage: "https://alkesh-agrawal.github.io/personal-web-page/alkesh_mma2.png"
  },
  {
    id: 8, acronym: "Silicon", publisher: "Springer Nature", journal: "Silicon",
    authors: "Rahul Misra, Kunal Singh, Alkesh Agrawal, Anant Kumar Maurya",
    title: "\"Electronic Noise Analysis in Silicon Junctionless Nanowire Transistor and Its Reliability Performance with Interface Trap Charge,\"",
    source: "Silicon (Springer Nature), July 16, 2022.",
    indexing: "Indexed in WoS-SCIE, I.F 3.3", issn_isbn: "ISSN: 1876-9918",
    doi_url: "https://doi.org/10.1007/s12633-022-02019-5", image: page8,
  },
  {
    id: 9, acronym: "JMOe", publisher: "JMOe", journal: "J. Microw. Optoelectron. Electromagn. Appl.",
    authors: "Alkesh Agrawal and Mukul Misra",
    title: "\"Angle of Incidence and Polarization Insensitive Fractal Shaped Dual Broad-Band Metamaterial Absorber for C- and X-Band Applications,\"",
    source: "JMOe, Vol. 20, No. 3, pp. 556-569, 2021.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISSN: 2179-1074",
    doi_url: "https://doi.org/10.1590/2179-10742021v20i31207", image: page9,
  },
  {
    id: 10, acronym: "PIER-C", publisher: "PIER", journal: "PIER C",
    authors: "Kunal Krishna Upadhyay, Alkesh Agrawal, and Mukul Misra",
    title: "\"Wide-Band Log-Periodic Microstrip Antenna with Defected Ground Structure for C-Band Applications,\"",
    source: "Progress In Electromagnetics Research C, Vol. 112, 127-137, 2021.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISSN: 1937-8718",
    doi_url: "https://www.jpier.org/PIERC/pier.php?paper=21031106",
    image: page10,
    techImage: "https://alkesh-agrawal.github.io/personal-web-page/alkesh_anth1.png"
  },
  {
    id: 11, acronym: "MRX", publisher: "IOP", journal: "Materials Research Express",
    authors: "Alkesh Agrawal, Mukul Misra and Ashutosh Singh",
    title: "“Wide incidence angle and polarization insensitive dual broad-band metamaterial absorber based on concentric split and continuous rings resonator structure”",
    source: "Materials Research Express (IOP Science), Vol. 5, no. 11, pp. 115801, 2018.",
    indexing: "Indexed in WoS-SCIE, I.F 1.151", issn_isbn: "ISSN: 2053-1591",
    doi_url: "https://iopscience.iop.org/article/10.1088/2053-1591/aadd83", 
    image: page11,
    techImage: "https://alkesh-agrawal.github.io/personal-web-page/alkesh_mma3.png"
  },
  {
    id: 12, acronym: "PIER-M", publisher: "PIER", journal: "PIER M",
    authors: "Alkesh Agrawal, Mukul Misra and Ashutosh Singh",
    title: "“Oblique Incidence and Polarization Insensitive Fractal Shaped Metamaterial Absorber for C-Band Applications”",
    source: "Progress In Electromagnetics Research M, Vol. 60, pp. 33-46, 2017.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISSN: 1937-8726",
    doi_url: "http://www.jpier.org/PIERM/pier.php?paper=17061302", 
    image: page12,
  },
  {
    id: 13, acronym: "IEEE", publisher: "IEEE", journal: "IEEE-Xplore",
    authors: "Kunal Krishna Upadhyay, Alkesh Agrawal and Mukul Misra",
    title: "“Wide-band CPW-Fed Slotted Microstrip Antenna with Defected Ground Structure for C-Band Applications”",
    source: "2019 IEEE International Conference on Computing, Power and Communication Technologies (GUCON), pp. 121-124, 2019.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Electronic ISBN: 978-1-7281-0000-5",
    doi_url: "https://ieeexplore.ieee.org/document/8991515", 
    image: page13
  },
  {
    id: 14, acronym: "IEEE", publisher: "IEEE", journal: "IEEE-Xplore",
    authors: "Alkesh Agrawal, Mukul Misra and Ashutosh Singh",
    title: "“A Dual Broadband Metamaterial Absorber with C-shaped Resonator Structure”",
    source: "2017 11th International Conference on Industrial and Information Systems (ICIIS), pp. 597-601, 2017.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Electronic ISBN: 978-1-5090-5384-1",
    doi_url: "https://ieeexplore.ieee.org/document/7894722", 
    image: page14,
  },
  {
    id: 15, acronym: "IEEE", publisher: "IEEE", journal: "IEEE-Xplore",
    authors: "Dinesh Kumar, Alkesh Agrawal and Mukul Misra",
    title: "“Non Iterative LDPC Codes for Error Correction”",
    source: "2016 3rd International Conference on Recent Advances in Information Technology (RAIT), pp. 22-25, 2016.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Electronic ISBN: 978-1-5090-2146-8",
    doi_url: "https://ieeexplore.ieee.org/document/7510219", 
    image: page15,
  },
  {
    id: 16, acronym: "IJAMT", publisher: "IJAMT", journal: "Int. Jour. of Adv. in Micro. Tech.",
    authors: "Alkesh Agrawal, Mukul Misra and Ashutosh Singh",
    title: "“A Multiband Metamaterial Absorber based on Triangular Split Ring Resonator Structure”",
    source: "International Journal of Advances in Microwave Technology, Vol. 1, no. 1, pp. 5-9, 2016.",
    indexing: "Peer Reviewed", issn_isbn: "ISSN: 2456-4346",
    doi_url: "https://ijamt.com/index.php/ijamt/issue/view/2", 
    image: page16,
  }

];

const bookChapters = [
  {
    id: 101, acronym: "IGI", publisher: "IGI Global", journal: "Book Chapter",
    authors: "S. Khalid, Shashi Kant Gupta, Midhun Chakkaravarthy, Dharmendra Prakash, Alkesh Agrawal, Dinesh Kumar Nishad",
    title: "\"Nano-Engineered Surface Coatings for Corrosion Resistance in UAV-Based Fog Dispersal Systems\"",
    source: "Advancements in Nanomaterials for Sustainable Aviation, 2025.",
    indexing: "Indexed in SCOPUS", issn_isbn: "DOI: 10.4018/979-8-3373-3862-0.ch005",
    doi_url: "https://doi.org/10.4018/979-8-3373-3862-0.ch005", 
    image: book1,
  },
  {
    id: 102, acronym: "IGI", publisher: "IGI Global", journal: "Book Chapter",
    authors: "S. Khalid, Shashi Kant Gupta, Midhun Chakkaravarthy, Dharmendra Prakash, Alkesh Agrawal, Dinesh Kumar Nishad",
    title: "\"Graphene in Electromagnetic Interference Shielding: From Fundamentals to Aerospace and 5G Applications\"",
    source: "Advancements in Nanomaterials for Sustainable Aviation, 2025.",
    indexing: "Indexed in SCOPUS", issn_isbn: "DOI: 10.4018/979-8-3373-3862-0.ch007",
    doi_url: "https://doi.org/10.4018/979-8-3373-3862-0.ch007",
     image: book2,
  },
  {
    id: 103, acronym: "IGI", publisher: "IGI Global", journal: "Book Chapter",
    authors: "Dharmendra Prakash, Alkesh Agrawal, Saifullah Khalid",
    title: "\"A Comprehensive and In-Depth Review of Innovative Antenna Designs for UAVs\"",
    source: "Advanced Antenna Technologies for Aerial Platforms, 2025.",
    indexing: "Indexed in SCOPUS", issn_isbn: "DOI: 10.4018/979-8-3693-6035-4.ch001",
    doi_url: "https://doi.org/10.4018/979-8-3693-6035-4.ch001", 
    image: book3,
  },
  {
    id: 104, acronym: "IGI", publisher: "IGI Global", journal: "Book Chapter",
    authors: "Dharmendra Prakash, Alkesh Agrawal, Saifullah Khalid",
    title: "\"Comparative Analysis of UAVs: A Study on Payload Capacity and Performance\"",
    source: "New Innovations in AI, Aviation, and Air Traffic Technology, 2024.",
    indexing: "Indexed in SCOPUS", issn_isbn: "DOI: 10.4018/979-8-3693-1954-3.ch007",
    doi_url: "https://doi.org/10.4018/979-8-3693-1954-3.ch007", image: book4,
  },
  {
    id: 105, acronym: "IGI", publisher: "IGI Global", journal: "Book Chapter",
    authors: "Alkesh Agrawal, Bhagwant Singh",
    title: "\"Study of Novel Design of Multi-Band and Broad-Band Metamaterial Microwave Absorber\"",
    source: "Metamaterial Technology and Intelligent Metasurface for Wireless Communication Systems, 2023.",
    indexing: "Indexed in SCOPUS", issn_isbn: "ISBN: 9781668469378",
    doi_url: "https://www.igi-global.com/book/_/312573", image: book5,
  },
  {
    id: 106, acronym: "Intech", publisher: "IntechOpen", journal: "Book Chapter",
    authors: "Alkesh Agrawal",
    title: "\"An Application-Based Study on Electromagnetic Absorber Using Metamaterial\"",
    source: "Metamaterials - History, Current State, Applications, and Perspectives, 2022.",
    indexing: "Indexed in SCOPUS", issn_isbn: "Online First ISBN: 978-1-83969-633-6",
    doi_url: "https://www.intechopen.com/online-first/84434", image: book6,
  }
];

const renderAuthors = (authors) => {
  const parts = authors.split(/(Alkesh Agrawal\*?)/g);
  return parts.map((part, i) =>
    part.startsWith('Alkesh Agrawal') ? <strong key={i}>{part}</strong> : part
  );
};

const PublicationCard = ({ pub }) => {
  return (
    <div className="publication-card">
      <div className="list-view-visual">

        <div className="visual-top">
          {pub.image && (
            <img
              src={pub.image}
              alt={pub.acronym}
              className="visual-image"
            />
          )}
        </div>

        <div className="visual-bottom">
          <div className="visual-journal">{pub.acronym}</div>
          <div className="visual-publisher">{pub.publisher}</div>
        </div>
      </div>
      <div className="pub-text-content">
        <div className="publication-content">
          <div className="publication-details">
            {renderAuthors(pub.authors)}, {pub.title}, {pub.source}
          </div>
          <div className="publication-footer">
            <span className="indexed-info"><strong>{pub.indexing}</strong> {pub.issn_isbn}</span>
            <a href={pub.doi_url} target="_blank" rel="noopener noreferrer" className="doi-link">
              {pub.doi_url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResearchPublications = () => {
  return (
    <div className="publications-container">
      <div className="publications-header">
        <h1 className="main-title">Research Publications</h1>
      </div>
      <div className="publications-sections">
        <section className="pub-section">
          <h2 className="section-title-mod">Journal & Conference Papers</h2>
          <div className="publications-grid-layout">
            {journalPapers.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </section>

        <section className="pub-section">
          <h2 className="section-title-mod">Book Chapter Publications</h2>
          <div className="publications-grid-layout">
            {bookChapters.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPublications;
