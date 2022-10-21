import { FunctionComponent } from "react"

const Gallery: FunctionComponent = (): JSX.Element => {
return (
    <div className="relative flex bg-offBlack w-full min-w-full h-fit min-h-fit">
        <div className="grid grid-flow-rows auto-row-[auto auto] w-full min-w-full p-4">
            <div className="relative h-fit w-fit row-start-1">

            </div>
            <div className="relative h-fit w-fit row-start-2">
                <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                </div>
            </div>
        </div>
    </div>
)
}

 export default Gallery