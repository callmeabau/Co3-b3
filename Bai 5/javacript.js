let a = document.getElementById('a').value;
let b = document.getElementById('b').value;

function gpt ()
{
    if ( a == 0 && b == 0 )
    {
        alert('pt vo so nghiem')
    } else if ( a != 0 && b == 0)
    {
        alert('pt co nghiem x=0')
    } else if (' a == 0 && b != 0' )
    {
        alert('pt vo nghiem')
    } else
    {
        alert('Phương trình có nghiệm x = ')
    }
}