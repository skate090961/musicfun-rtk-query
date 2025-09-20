import s from './page-not-found.module.scss'

export const PageNotFound = () => {
    return <>
        <h1 className={s.title}>404</h1>
        <h2 className={s.subtitle}>Page Not Found</h2>
    </>
}
