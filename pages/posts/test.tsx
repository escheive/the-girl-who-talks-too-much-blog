
import Component from '@/components/ViewPost/Component'
let testVariable = `<h1> Does this work?</h1>`



const test = (props: any) => {

    return (

        <div className='test'>

            {testVariable}
            <Component as='h1'>Hello</Component>

        </div>

    )
}

export default test;
