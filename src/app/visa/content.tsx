import React, { useState, useEffect } from 'react';
import './visa-page.module.scss';

function App() {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<any>([]);
    const [showCountries, setShowCountries] = useState(false);

    useEffect(() => {
        // 这里可以替换为你的实际数据
        setCountries([
            { state: '州1', countries: ['国家1', '国家2'] },
            { state: '州2', countries: ['国家3', '国家4'] },
        ]);
    }, []);

    return (
        <div className="App">
            <div>123</div>
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onFocus={() => setShowCountries(true)}
                onBlur={() => setTimeout(() => setShowCountries(false), 200)}
            />
            {showCountries && (
                <div className="dropdown">
                    {countries.map((item: any, index: number) => (
                        <div key={index}>
                            <h3>{item.state}</h3>
                            {item.countries.map((country, index) => (
                                <p key={index} onClick={() => setCountry(country)}>
                                    {country}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
