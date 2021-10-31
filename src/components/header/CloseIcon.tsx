export default function CloseIcon({ color = 'black' }: { color?: string }) {
  return (
    <svg
      className={`w-6 h-6 fill-current text-${color}`}
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="Closedefault ClosedefaultDesc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        transform="translate(-915.000000, -3440.000000)"
        points="952.558 3449 939 3462.558 925.442 3449 924 3450.442 937.558 3463.999 924 3477.558 925.442 3479 939 3465.442 952.558 3479 954 3477.558 940.442 3463.999 954 3450.442"
      ></polygon>
    </svg>
  )
}
