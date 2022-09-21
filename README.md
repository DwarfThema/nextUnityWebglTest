## Unity WebGL x Next.js 테스트

##

{
"public": true,
"routes": [
{
"src": "/(?<filepath>.+)\\.(?<ext>data)",
"dest": "https://media.githubusercontent.com/media/DwarfThema/nextUnityWebglTest/main/public/Build/testNext.data",
"headers": {
"Cache-Control": "s-maxage=3600",
"X-JacobFord-Test": "hello-world"
}
}
],
"github": {
"silent": true
}
}

\*.data filter=lfs diff=lfs merge=lfs -text
