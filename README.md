# Yongjin Kim Portfolio

Personal engineering portfolio published at [kywls405.github.io](https://kywls405.github.io/).

The site highlights work in:

- Rocket avionics and hardware-in-the-loop testing
- IMU-based active suspension with STM32 chassis PD control and Arduino Wi-Fi telemetry
- FPGA-accelerated multi-sensor navigation
- INS/GNSS navigation and sensor fusion
- Vision and optical navigation prototypes
- Ground-control and telemetry software
- RISC-V CNN kernel optimization
- RTL neural-network acceleration
- Zynq FFT software optimization
- Pipelined CPU architecture
- Embedded vision prototypes

## Active suspension release

The active-suspension card links to the [final source and implementation guide](https://github.com/kywls405/stroller-active-suspension), [demonstration video](https://github.com/kywls405/stroller-active-suspension/blob/main/Display_Video.mp4), and [submission report (PDF)](https://github.com/kywls405/stroller-active-suspension/blob/main/IMU%20%EA%B8%B0%EB%B0%98%20%EC%95%A1%ED%8B%B0%EB%B8%8C%20%EC%84%9C%EC%8A%A4%ED%8E%9C%EC%85%98%20%EC%9C%A0%EB%AA%A8%EC%B0%A8%EC%9D%98%20%EC%A7%84%EB%8F%99%20%EC%A0%80%EA%B0%90%20%EB%B0%8F%20%EC%9E%90%EC%84%B8%20%EC%95%88%EC%A0%95%ED%99%94%20%EC%8B%9C%EC%8A%A4%ED%85%9C.pdf). The card distinguishes implemented firmware and telemetry from ongoing closed-loop performance validation; it does not claim a measured vibration-reduction result or occupied-use safety approval.

## Local preview

Open `index.html` directly, or run a static server from the repository root:

```bash
python -m http.server 4173
```

## Structure

```text
.
|-- assets/       Optimized public images used by the site
|-- index.html    Page structure and project content
|-- portfolio-v6.css  Responsive visual system
`-- portfolio-v2.js   Navigation and active-section behavior
```

The portfolio is deployed through GitHub Pages from the `main` branch.
