interface Props {
  title: string;
  description: string;
}

export default function ErrorScreen({ title, description }: Props) {
  return (
    <div className="mb-12 rounded-lg">
      <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-12">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="mx-auto mb-6 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

          {/* Description */}
          <p className="text-white mb-8 leading-relaxed">{description}</p>

          {/* Decorative element */}
          <div className="mt-12 opacity-5">
            <svg
              className="w-32 h-32 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
