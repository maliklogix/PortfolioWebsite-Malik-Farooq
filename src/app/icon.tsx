import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  // Use a relative path to your profile picture
  // Note: We use a relative path from the app directory to reach public/
  const avatarData = await fetch(
    new URL("../../public/me.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <img
          src={avatarData as any}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          alt="Farooq"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
