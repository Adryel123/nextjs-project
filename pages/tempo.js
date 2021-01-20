function Tempo(props) {
    const dynamicDate = new Date()
    const dymamicDateString = dynamicDate.toGMTString()
    return (
        <div>
            <div>{dymamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo