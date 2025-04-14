import { metadataImage } from "@/lib/metadata";
import { ImageResponse } from "next/og";

export const GET = metadataImage.createAPI(async (page) => {
  const size = {
    width: 1200,
    height: 630,
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#2E2E2E",
          width: "100%",
          height: "100%",
          color: "#F2F0E3",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <div style={{ position: "absolute", left: "80px", top: "60px" }}>
          zen docs
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            {page.data.title}
          </div>
          <div
            style={{
              color: "#A9A79B",
              fontSize: "36px",
            }}
          >
            {page.data.description}
          </div>
        </div>
        <svg
          style={{
            position: "absolute",
            bottom: "-225px",
            right: "-225px",
            height: "450px",
            width: "450px",
          }}
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 44.3077C38.7974 44.3077 44.3077 38.7974 44.3077 32C44.3077 25.2027 38.7974 19.6923 32 19.6923C25.2027 19.6923 19.6923 25.2027 19.6923 32C19.6923 38.7974 25.2027 44.3077 32 44.3077ZM41.8462 32C41.8462 37.4379 37.4379 41.8462 32 41.8462C26.5621 41.8462 22.1538 37.4379 22.1538 32C22.1538 26.5621 26.5621 22.1538 32 22.1538C37.4379 22.1538 41.8462 26.5621 41.8462 32Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.3333 32C53.3333 43.7821 43.7821 53.3333 32 53.3333C20.2179 53.3333 10.6667 43.7821 10.6667 32C10.6667 20.2179 20.2179 10.6667 32 10.6667C43.7821 10.6667 53.3333 20.2179 53.3333 32ZM32 49.2308C41.5163 49.2308 49.2308 41.5163 49.2308 32C49.2308 22.4837 41.5163 14.7692 32 14.7692C22.4837 14.7692 14.7692 22.4837 14.7692 32C14.7692 41.5163 22.4837 49.2308 32 49.2308Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM32 58.2564C46.501 58.2564 58.2564 46.501 58.2564 32C58.2564 17.499 46.501 5.74359 32 5.74359C17.499 5.74359 5.74359 17.499 5.74359 32C5.74359 46.501 17.499 58.2564 32 58.2564Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
