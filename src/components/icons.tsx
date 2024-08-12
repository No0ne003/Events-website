
// Icons.tsx
import Image from "next/image";

// Define the props for the `Image` component and `SVG` elements separately
type ImageProps = React.ComponentProps<typeof Image>;
type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  logo: ({ src = "/logo-urba.png", alt = "urba logo", width = 160, height = 13, className, ...props }: ImageProps) => (
    <Image src={src} alt={alt} width={width} height={height} className={className} {...props} />
  ),
  tei: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 2000 2500"
      {...props}
    >
      <g>
        <path d="M920.1,464.44c1.97,8.28,7.18,13.94,12.76,13.94h134.28c5.58,0,10.79-5.66,12.76-13.94l46.36-149.1   c3.78-15.9-1.96-32.01-11.6-32.01H885.33c-9.64,0-15.38,16.11-11.6,32.01L920.1,464.44z" />
        <path d="M1069.93,519.97c-0.93,0.06-1.85,0.08-2.79,0.08H932.86c-0.94,0-1.87-0.02-2.79-0.08l-146.14,888.05L1000,1716.67   l216.07-308.65L1069.93,519.97z" />
      </g>
    </svg>
  ),
};

