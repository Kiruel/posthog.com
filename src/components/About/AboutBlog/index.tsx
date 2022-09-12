import React from 'react'
import { CallToAction } from 'components/CallToAction'
import Link from 'components/Link'

const BlogCallout = () => {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 64">
            <g clipPath="url(#a)">
                <path
                    d="M162.96 28.09c.646-1.39 1.299-2.8 1.806-4.246.102-.287.194-.6.259-.915a.99.99 0 0 0 .036-.205c.118-.717.073-1.45-.358-2.055-.688-.958-2.019-1.094-3.089-1.233a93.837 93.837 0 0 0-4.517-.48 93.874 93.874 0 0 0-9.336-.308c-.808.013-2.149.351-2.366 1.283-.217.93.994 1.275 1.681 1.266a93.537 93.537 0 0 1 7.569.176c1.173.08 2.344.186 3.513.318.5.056 1.004.114 1.501.18l1.004.136c.327-.07.443.036.351.312.02.048.033.097.046.155-15.284 8.622-31.794 15-48.933 18.802-.703.156-1.995.62-1.832 1.57.152.898 1.57 1.028 2.25.88 16.44-3.648 32.331-9.496 47.171-17.428a56.745 56.745 0 0 1-1.087 2.4 68.137 68.137 0 0 1-3.755 6.706c-1.129 1.785 2.9 1.957 3.732.641a70.072 70.072 0 0 0 4.354-7.955Z"
                    fill="#F1A82C"
                />
            </g>
            <path
                d="M2.16 52.04c-.453-.013-.82-.2-1.1-.56a1.405 1.405 0 0 1-.42-.98C.627 49.14.6 47.214.56 44.72L.5 39.1c0-.386.133-.713.4-.98.267-.28.593-.42.98-.42.387-.013.713.114.98.38.28.267.427.594.44.98l.06 5.24.06 5.04c.653 0 1.6-.006 2.84-.02 1.253-.013 2.173-.02 2.76-.02.387 0 .713.134.98.4.28.254.42.567.42.94 0 .374-.14.7-.42.98-.267.267-.593.4-.98.4-.44 0-1.58.007-3.42.02-1.853.014-3 .014-3.44 0ZM14.99 52.02c-.48 0-1-.093-1.56-.28a4.436 4.436 0 0 1-1.74-1.18c-.452-.533-.732-1.113-.84-1.74a6.311 6.311 0 0 1-.12-1.2c0-.893.174-1.733.52-2.52.48-1.106 1.154-2 2.02-2.68a4.666 4.666 0 0 1 2.96-1.02c.4 0 .834.054 1.3.16.308.08.608.22.9.42h.1l.2-.02c.334 0 .628.12.88.36.268.24.42.534.46.88l.14 1.38c.028.587.06 1.587.1 3l.04 1.08c.028.667.04 1.107.04 1.32.014.2.008.394-.02.58a1.9 1.9 0 0 1-.44 1 1.181 1.181 0 0 1-.9.42 1.422 1.422 0 0 1-.84-.22c-.24-.173-.412-.48-.52-.92a2.72 2.72 0 0 1-1.12.82c-.52.214-1.04.334-1.56.36Zm.02-2.82c.4 0 .814-.126 1.24-.38a2.13 2.13 0 0 0 .36-.3l.3-.28.34-.48a.682.682 0 0 1 .28-.2c0-1.12-.032-2.066-.1-2.84l-.2-.14-.28-.22-.18-.12a2.213 2.213 0 0 0-.5-.08c-.48 0-.946.187-1.4.56-.44.374-.792.894-1.06 1.56-.212.52-.32.987-.32 1.4 0 .36.08.66.24.9.174.24.414.414.72.52.2.067.388.1.56.1ZM26.155 52.04c-.266 0-.526-.086-.78-.26a2.42 2.42 0 0 1-.42-.2l-.52-.3c-.533-.306-.933-.593-1.2-.86-.226-.293-.366-.58-.42-.86-.053-.293-.086-.72-.1-1.28v-.4c-.013-.386-.02-1.286-.02-2.7 0-.573.007-1.006.02-1.3h-.38a1.28 1.28 0 0 1-.88-.34c-.24-.24-.36-.54-.36-.9 0-.373.127-.68.38-.92.254-.253.547-.38.88-.38h.36l.02-.86v-.62c.014-.426.154-.753.42-.98.28-.24.6-.36.96-.36.374 0 .7.127.98.38.294.254.44.6.44 1.04l-.04 1.36h.74c.48 0 .84.127 1.08.38.24.254.36.574.36.96 0 .374-.126.694-.38.96-.253.254-.626.38-1.12.38h-.74c0 .547-.006.954-.02 1.22-.013.28-.02.68-.02 1.2 0 .854.027 1.594.08 2.22.054.054.087.08.1.08l.2.14.16.08.18.1.16.08c.24.107.447.227.62.36.414.28.62.654.62 1.12 0 .374-.133.714-.4 1.02-.266.294-.586.44-.96.44ZM33.542 52.18c-1.067 0-2-.226-2.8-.68-.8-.453-1.413-1.06-1.84-1.82-.413-.76-.62-1.6-.62-2.52 0-1.16.213-2.16.64-3a4.898 4.898 0 0 1 1.84-2.02c.8-.493 1.707-.74 2.72-.74 1.04 0 1.927.214 2.66.64a4.139 4.139 0 0 1 1.68 1.74c.373.72.56 1.527.56 2.42 0 .454-.147.807-.44 1.06-.293.254-.687.4-1.18.44-1 .094-1.887.14-2.66.14-.733 0-1.52-.02-2.36-.06l-.7-.02c.08.654.333 1.167.76 1.54.44.36 1.1.527 1.98.5.4-.013.72-.06.96-.14.24-.093.453-.226.64-.4l.34-.34c.12-.12.253-.213.4-.28.147-.066.327-.1.54-.1.347 0 .633.12.86.36.24.227.36.494.36.8 0 .427-.213.834-.64 1.22-.427.387-.98.694-1.66.92a6.295 6.295 0 0 1-2.04.34Zm-2.46-6.46c.787.107 1.66.147 2.62.12.92-.013 1.593-.073 2.02-.18-.027-.573-.2-1.033-.52-1.38-.307-.346-.867-.513-1.68-.5-.68.014-1.233.167-1.66.46-.427.294-.687.787-.78 1.48ZM43.686 52.14a6.76 6.76 0 0 1-1.72-.22c-.547-.146-1.007-.353-1.38-.62a3.436 3.436 0 0 1-.76-.9l-.14-.24-.18-.32c-.12-.226-.18-.433-.18-.62 0-.346.14-.646.42-.9.293-.266.62-.4.98-.4.453 0 .813.2 1.08.6l.24.4.12.24c.08.16.233.287.46.38.347.107.647.16.9.16.187 0 .42-.02.7-.06.707-.146 1.073-.366 1.1-.66v-.08c0-.16-.073-.313-.22-.46-.173-.16-.573-.366-1.2-.62l-.88-.34a10.16 10.16 0 0 1-1.06-.42c-.973-.426-1.607-.946-1.9-1.56-.2-.4-.3-.793-.3-1.18 0-.32.067-.62.2-.9.267-.653.887-1.18 1.86-1.58.64-.253 1.3-.38 1.98-.38.133 0 .333.014.6.04 1.173.12 2.2.58 3.08 1.38.28.24.42.547.42.92 0 .347-.127.66-.38.94-.24.28-.54.42-.9.42-.28 0-.56-.093-.84-.28l-.48-.36c-.227-.16-.393-.26-.5-.3-.4-.133-.78-.2-1.14-.2-.333 0-.62.034-.86.1-.173.067-.26.16-.26.28 0 .08.04.147.12.2.093.054.24.127.44.22.24.107.587.234 1.04.38.307.094.62.214.94.36.213.094.447.2.7.32.267.107.54.26.82.46.44.294.787.66 1.04 1.1.253.427.38.907.38 1.44 0 .174-.007.307-.02.4-.12.827-.5 1.467-1.14 1.92-.627.454-1.38.747-2.26.88-.293.04-.6.06-.92.06ZM53.29 52.04c-.267 0-.527-.086-.78-.26a2.42 2.42 0 0 1-.42-.2l-.52-.3c-.534-.306-.934-.593-1.2-.86-.227-.293-.367-.58-.42-.86-.054-.293-.087-.72-.1-1.28v-.4c-.014-.386-.02-1.286-.02-2.7 0-.573.006-1.006.02-1.3h-.38a1.28 1.28 0 0 1-.88-.34c-.24-.24-.36-.54-.36-.9 0-.373.126-.68.38-.92.253-.253.546-.38.88-.38h.36l.02-.86v-.62c.013-.426.153-.753.42-.98.28-.24.6-.36.96-.36.373 0 .7.127.98.38.293.254.44.6.44 1.04l-.04 1.36h.74c.48 0 .84.127 1.08.38.24.254.36.574.36.96 0 .374-.127.694-.38.96-.254.254-.627.38-1.12.38h-.74c0 .547-.007.954-.02 1.22-.014.28-.02.68-.02 1.2 0 .854.026 1.594.08 2.22.053.054.086.08.1.08l.2.14.16.08.18.1.16.08c.24.107.446.227.62.36.413.28.62.654.62 1.12 0 .374-.134.714-.4 1.02-.267.294-.587.44-.96.44ZM64 54.64a1.37 1.37 0 0 1-.44.98 1.267 1.267 0 0 1-.98.38c-.387 0-.713-.14-.98-.42a1.333 1.333 0 0 1-.4-.98c.04-2.306.06-6.226.06-11.76 0-.386.133-.713.4-.98.28-.28.613-.42 1-.42.507 0 .9.22 1.18.66 1.44-.8 2.813-.906 4.12-.32 1.147.534 1.987 1.48 2.52 2.84.213.56.34 1.147.38 1.76.053.6.007 1.227-.14 1.88a4.603 4.603 0 0 1-.84 1.82 4.498 4.498 0 0 1-1.66 1.36c-1.147.574-2.173.727-3.08.46a3.931 3.931 0 0 1-1.1-.52 2404.68 2404.68 0 0 0-.04 3.26Zm1.94-5.32c.2.067.547-.02 1.04-.26.52-.266.867-.72 1.04-1.36.173-.653.14-1.346-.1-2.08-.293-.653-.667-1.086-1.12-1.3-.467-.213-.92-.233-1.36-.06-.44.174-.9.627-1.38 1.36v2.3c.267.494.567.854.9 1.08.333.214.66.32.98.32ZM76.104 52.14c-1.16-.226-2.066-.76-2.72-1.6a5.66 5.66 0 0 1-1.2-2.88c-.12-1-.006-2 .34-3 .347-1.013.907-1.846 1.68-2.5.307-.266.7-.473 1.18-.62.014 0 .154-.04.42-.12.107-.026.187-.053.24-.08a1.37 1.37 0 0 1 1.12.04c1.254.2 2.094.407 2.52.62.494.24.914.574 1.26 1 .347.427.587.88.72 1.36.147.467.254.967.32 1.5.067.52.06.994-.02 1.42a7.724 7.724 0 0 1-.44 1.9 5.822 5.822 0 0 1-1.04 1.72 3.869 3.869 0 0 1-1.64 1.16c-.76.267-1.673.294-2.74.08Zm.52-2.72c.574.107 1.007.107 1.3 0 .254-.093.507-.353.76-.78.267-.44.434-.993.5-1.66.08-.666.04-1.213-.12-1.64-.16-.44-.353-.713-.58-.82a2.027 2.027 0 0 0-.48-.16 4.061 4.061 0 0 0-.64-.1 8.473 8.473 0 0 1-.8-.16 5.2 5.2 0 0 1-.36.1l-.2.08c-.373.32-.66.76-.86 1.32-.2.56-.26 1.14-.18 1.74.067.574.24 1.04.52 1.4.294.36.674.587 1.14.68ZM87.49 52.14a6.76 6.76 0 0 1-1.72-.22c-.546-.146-1.006-.353-1.38-.62a3.436 3.436 0 0 1-.76-.9l-.14-.24-.18-.32c-.12-.226-.18-.433-.18-.62 0-.346.14-.646.42-.9.294-.266.62-.4.98-.4.454 0 .814.2 1.08.6l.24.4.12.24c.08.16.234.287.46.38.347.107.647.16.9.16.187 0 .42-.02.7-.06.707-.146 1.074-.366 1.1-.66v-.08c0-.16-.073-.313-.22-.46-.173-.16-.573-.366-1.2-.62l-.88-.34a10.16 10.16 0 0 1-1.06-.42c-.973-.426-1.606-.946-1.9-1.56-.2-.4-.3-.793-.3-1.18 0-.32.067-.62.2-.9.267-.653.887-1.18 1.86-1.58.64-.253 1.3-.38 1.98-.38.134 0 .334.014.6.04 1.174.12 2.2.58 3.08 1.38.28.24.42.547.42.92 0 .347-.126.66-.38.94-.24.28-.54.42-.9.42-.28 0-.56-.093-.84-.28l-.48-.36c-.226-.16-.393-.26-.5-.3-.4-.133-.78-.2-1.14-.2-.333 0-.62.034-.86.1-.173.067-.26.16-.26.28 0 .08.04.147.12.2.094.054.24.127.44.22.24.107.587.234 1.04.38.307.094.62.214.94.36.214.094.447.2.7.32.267.107.54.26.82.46.44.294.787.66 1.04 1.1.254.427.38.907.38 1.44 0 .174-.006.307-.02.4-.12.827-.5 1.467-1.14 1.92-.626.454-1.38.747-2.26.88-.293.04-.6.06-.92.06ZM97.094 52.04c-.266 0-.526-.086-.78-.26a2.42 2.42 0 0 1-.42-.2l-.52-.3c-.533-.306-.933-.593-1.2-.86-.226-.293-.366-.58-.42-.86-.053-.293-.086-.72-.1-1.28v-.4c-.013-.386-.02-1.286-.02-2.7 0-.573.007-1.006.02-1.3h-.38a1.28 1.28 0 0 1-.88-.34c-.24-.24-.36-.54-.36-.9 0-.373.127-.68.38-.92.254-.253.547-.38.88-.38h.36l.02-.86v-.62c.014-.426.154-.753.42-.98.28-.24.6-.36.96-.36.374 0 .7.127.98.38.294.254.44.6.44 1.04l-.04 1.36h.74c.48 0 .84.127 1.08.38.24.254.36.574.36.96 0 .374-.126.694-.38.96-.253.254-.626.38-1.12.38h-.74c0 .547-.006.954-.02 1.22-.013.28-.02.68-.02 1.2 0 .854.027 1.594.08 2.22.054.054.087.08.1.08l.2.14.16.08.18.1.16.08c.24.107.447.227.62.36.414.28.62.654.62 1.12 0 .374-.133.714-.4 1.02-.266.294-.586.44-.96.44Z"
                fill="#F1A82C"
            />
            <defs>
                <clipPath id="a">
                    <path fill="#fff" transform="matrix(.9415 .337 .337 -.9415 106 47.075)" d="M0 0h50v50H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export const AboutBlog = () => {
    return (
        <section
            id="blog"
            className="max-w-5xl mx-auto bg-black lg:grid lg:grid-cols-5 text-white p-8 lg:p-12 space-y-8 lg:gap-8 lg:space-y-0"
        >
            <div className="col-span-3 text-center lg:text-left">
                <h3 className="mb-2 lg:mb-4 text-4xl lg:text-5xl leading- leading-tight">
                    Still can't get enough PostHog?
                </h3>
                <h4 className="text-lg lg:text-2xl mb-4">
                    Check out our blog. <br className="lg:hidden" />
                    <span className="text-yellow">(We put a lot of work into it.)</span>
                </h4>
                <CallToAction to="/blog" type="secondary" className="!w-full lg:!w-auto lg:min-w-[200px]">
                    Visit blog
                </CallToAction>
            </div>
            <div className="col-span-2 relative">
                <Link to="/blog/post">
                    <figure className="mb-2">
                        <div className="aspect-video border border-solid border-gray-aceent-dark flex items-center justify-center">
                            image here
                        </div>
                    </figure>
                    <h4 className="text-white text-center lg:text-left">Latest blog post title name</h4>
                </Link>
                <div className="w-[170px] h-[64px] absolute bottom-[-20px] left-[-190px] hidden lg:block">
                    <BlogCallout />
                </div>
            </div>
        </section>
    )
}
