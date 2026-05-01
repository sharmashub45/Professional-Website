'use client'

const FloatingAvatar = () => {
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Professional-Website' : ''
    return `${basePath}${path}`
  }

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-40 pointer-events-none"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 md:border-[3px] border-white shadow-lg bg-white">
        <img
          src={getAssetPath('/profile-avatar.png')}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default FloatingAvatar
