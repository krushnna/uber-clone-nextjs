import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import Router from 'next/dist/server/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth ,provider} from "../firebase"
import { useRouter } from 'next/router'


const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth , user=>{
            if(user){
                router.push('/')
            }
        }
            
            )
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>
                Log in to access your account
            </Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            
            <SignInButton onClick={()=> signInWithPopup(auth,provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col bg-gray-200 h-screen p-4
`

const SignInButton = tw.div`
bg-black text-white text-center py-4 mt-4 self-center w-full transform hover:scale-105 transition text-xl
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start

`

const Title = tw.div`
text-5xl text-gray-500 pt-4

`

const HeadImage =tw.img`
object-contain w-full
`