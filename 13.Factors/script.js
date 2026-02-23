function factors(value)
{
    let factor = [];
    for (let i = 1; i <= value; i++)
    {
        if (value % i == 0)
        {
            factor.push(i);
        }
    }
    console.log(factor);
}
factors(5);