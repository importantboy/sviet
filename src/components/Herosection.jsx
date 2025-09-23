"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Target, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Herosection = ({
  bigHeading = true,
  isIqac = false,
  btn1Target = false,
  btn2Target = false,
  heading,
  shortDescription,
  btnText1,
  btn1Href,
  btn2Href,
  btnText2,
  imgSrc,
  images = ['/About/boardsofmanagement.JPG' , '/About/cafeteria.webp' , '/About/library.jpeg' ],
  autoPlay = true,
  intervalMs = 2000,
  showControls = true,
  gradientClass = "bg-gradient-to-br from-blue-950 to-blue-800",
}) => {
  const slides = images && images.length > 0 ? images : [imgSrc || "/placeholder.svg"]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!autoPlay || paused || slides.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [autoPlay, paused, slides.length, intervalMs])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  const onKeyDown = (e) => {
    if (slides.length < 2) return
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
  }

  return (
    <section className={` relative ${gradientClass} text-white py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1
              className={`${bigHeading ? "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" : "text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"}`}
            >
              {heading}{" "}
            </h1>
            <p className="text-xl text-center text-white/80 leading-relaxed">{shortDescription}</p>
            {!isIqac ? (
              <div className="flex flex-col items-center lg:flex-row gap-4 justify-center">
                <Link
                  className="cursor-pointer"
                  to={btn1Href ? btn1Href : "/"}
                  {...(btn1Target ? { target: "_blank" } : {})}
                >
                  {btnText1 && (
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                      {btnText1}
                    </Button>
                  )}
                </Link>
                <Link
                  className="cursor-pointer"
                  to={btn2Href ? btn2Href : "/"}
                  {...(btn2Target ? { target: "_blank" } : {})}
                >
                  {btnText2 && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                    >
                      {btnText2}
                    </Button>
                  )}
                </Link>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="w-5 h-5" />
                  <span>Quality Excellence</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Target className="w-5 h-5" />
                  <span>Continuous Improvement</span>
                </div>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-2xl"
              role="region"
              aria-roledescription="carousel"
              aria-label="Hero image slider"
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              <div className="relative h-full">
                {slides.map((src, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
                    aria-hidden={i !== index}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src={src || "/placeholder.svg"}
                      alt={`Slide ${i + 1}`}
                      className="w-a h-auto max-h-[500px] object-cover scale-110 rounded-lg"

                    />
                  </div>
                ))}
                <div className="invisible">
                  <LazyLoadImage
                    effect="blur"
                    src={slides[0] || "/placeholder.svg"}
                    alt="Hero slide placeholder"
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                  />
                </div>
              </div>
              {showControls && slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Next</span>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
