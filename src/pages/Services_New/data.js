import microwaves from "../../assets/services/microwaves.jpg"
import turnKey from "../../assets/services/turnkey.jpg"
import fttx from "../../assets/services/fttx.jpg"
import lan from "../../assets/services/lan_top.webp"
import mile from "../../assets/services/lastmile.jpg"
import manage from "../../assets/services/managed.png"
const services = [
    {
        name: "Turnkey Site Build & Installation",
        description: "Our in-house experience spans over 25 years, anda collective team portfolio of over 3,000 sites under our belt.Our commitment to quality, safety, and meeting our client’s needs has allowed us to remain in the industry with passion.Our skills & services in the delivery of turnkey building & installation projects cover:➢ Survey & Design➢ GF & RT Infrastructure➢ Civil Works➢ Tower Work➢ Antenna Workss",
        img: turnKey,
    },
    {
        name: "Microwave, SDH + PDH equipment installation and Planning",
        description: "Fully resourced and trained teams of Engineers, Technicians and Riggers Install and Commission all major OEM supplier’s Radio and High Capacity Optical Transmission equipment (SDH/PDH).Providing documented frequency and tributary management records as part of the acceptance procedures.Transmission planning, including installation of very small aperture terminals (VSAT) is offered as part of a full range of transmission service. Our radio and transmission planning service includes ➢ Optic fiber route planning➢ PDH and SDH transmission link planning budget",
        img: microwaves
    },
    {
        name: "Managed Network Services",
        description: "Involves the corrective, preventive/routine maintenance and network optimization services of an MNO’s BSS (2G-3G-4G) Equipment, Transmission equipment, PDH and SDH, Mobile BTS (Cell-on-wheel), Replacement/logistics spare part management.",
        img: manage
    },
    {
        name: "FTTX Solutions",
        description: "Our Fiber optic solution entails laying and management of FOC to various building types turnkey installation, commissioning and maintenance services on fibre optic projects. Leasing of dark fiber can be arranged and procured on demand where available. Trenching and containment is conducted according to industry accepted standards where restitution and public safety is concerned. ",
        img: fttx
    },
    {
        name: "Last Mile As A Service",
        description: "Telserve Networks offers a turnkey approach to deployment of Last mile equipment's on an Operators Network. This involves the installation, operation and maintenance of all last mile infrastructure to guarantee an average of 98% availability. Such services include Leased lines, Internet, APN back haul, E1-PRI-STM-GE, SIP-VOIP",
        img: mile
    },
    {
        name: "LAN/WAN + Systems Integration",
        description: "Telserve Networks is highly competent in the design and implementation of networking solutions - from local area networks (LANs) to wide area networks (WANs) to virtual private networks (VPNs). We provide interface for workstations, servers, printers, scanners using routers, hubs, switches in well designed network architectures for Internet access, remote access, company-wide email services etc.We can extend wireless local area network coverage’s and help SOHO LAN’s share / distribute their internet subscription through our partner routers with WIFI services, we have our proprietary Wi-Fi Phones for Office and commercial use.",
        img: lan
    },
    // {
    //     name: "",
    //     description: "",
    //     img: ""
    // },
]
export default services;