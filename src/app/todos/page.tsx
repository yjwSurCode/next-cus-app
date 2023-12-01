'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { getTodos, addTodo } from '@/api/todos/route';
import Link from 'next/link';
import { Link as ScrollLink, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll';

import styles from './page.module.scss';

// 预加载;
// export const fetchAsyncData = async (code: string) => {
//      const { data, mutate } = useSWR('/api/todos', getTodos);
// };

export type StatsByWeekResponse = Awaited<ReturnType<any>>;

function logger(useSWRNext: any) {
    console.log(useSWRNext, 'useSWRNext');
    return (key: any, fetcher: any, config: any) => {
        // 将日志记录器添加到原始 fetcher。
        const extendedFetcher = (...args: any) => {
            console.log('SWR Request:', key);
            return fetcher(...args);
        };

        // 使用新的 fetcher 执行 hook。
        return useSWRNext(key, extendedFetcher, config);
    };
}

const durationFn = function (deltaTop: number) {
    return deltaTop;
};

const scrollToTop = () => {
    animateScroll.scrollToTop();
};
const scrollTo = (offset: number) => {
    scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: offset,
    });
};
const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
        Events.scrollEvent.register('end', () => {
            resolve(true);
            Events.scrollEvent.remove('end');
        });

        scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container',
            offset: 50,
        }),
    );
};

export default function App() {
    const [text, setText] = useState('');
    const { data, mutate } = useSWR<StatsByWeekResponse, { error: string }>(['/api/todos'], getTodos, {
        use: [logger],
    });
    console.log('111', data);

    return (
        <div>
            <Toaster toastOptions={{ position: 'bottom-center' }} />
            <h1>Todos </h1>
            <Link href="/mail">
                <div>ScrollLink jump page mail</div>
            </Link>
            <form onSubmit={(ev) => ev.preventDefault()}>
                <input value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                <button
                    type="submit"
                    onClick={async () => {
                        setText('');
                        const newTodo = {
                            id: Date.now(),
                            name: text,
                        };

                        try {
                            // Update the local state immediately and fire the
                            // request. Since the API will return the updated
                            // data, there is no need to start a new revalidation
                            // and we can directly populate the cache.
                            await mutate(addTodo(newTodo), {
                                optimisticData: [...data, newTodo],
                                rollbackOnError: true,
                                populateCache: true,
                                revalidate: false,
                            });
                            toast.success('Successfully added the new item.');
                        } catch (e) {
                            // If the API errors, the original data will be
                            // rolled back by SWR automatically.
                            toast.error('Failed to add the new item.');
                        }
                    }}
                >
                    Add
                </button>
            </form>
            <ul>
                {data
                    ? data.map((todo: any, index: number) => {
                          return (
                              <li key={index}>
                                  <div style={{ height: '100px' }}>
                                      <Link href="/mail">
                                          <button>
                                              {index}:{todo.name}
                                          </button>
                                      </Link>
                                  </div>
                              </li>
                          );
                      })
                    : null}
            </ul>

            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test1"
                                        to="test1"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={50}
                                    >
                                        Test 1
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test2"
                                        to="test2"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-55}
                                    >
                                        Test 2
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test3"
                                        to="test3"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Test 3
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test4"
                                        to="test4"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Test 4
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test5"
                                        to="test5"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        delay={1000}
                                    >
                                        Test 5 ( delay )
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test6"
                                        to="anchor"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Test 6 (anchor)
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test7"
                                        to="test7"
                                        spy={true}
                                        smooth={true}
                                        duration={durationFn}
                                    >
                                        Test 7 (duration and container)
                                    </ScrollLink>
                                </li>
                                <li>
                                    {' '}
                                    <a onClick={() => animateScroll.scrollTo(100)}>Scroll To 100!</a>
                                </li>
                                <li>
                                    {' '}
                                    <a onClick={() => animateScroll.scrollToBottom()}>Scroll To Bottom</a>
                                </li>
                                <li>
                                    {' '}
                                    <a onClick={() => animateScroll.scrollMore(500)}>Scroll 500 More!</a>
                                </li>
                                <li>
                                    {' '}
                                    <a onClick={() => animateScroll.scrollMore(1000, { delay: 1500 })}>
                                        Scroll 1000 More! ( delay ){' '}
                                    </a>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test8"
                                        to="same"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Same target
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        className="test9"
                                        to="same"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Same target
                                    </ScrollLink>
                                </li>
                                <li>
                                    {/* <a className="test1" href="#test1" onClick={(e) => scrollTo(e.target)}>
                                        Scroll to element
                                    </a> */}
                                </li>
                                <li>
                                    <a className="test1" href="#test1" onClick={() => scrollTo(-50)}>
                                        Scroll to element (offset -50)
                                    </a>
                                </li>
                                <li>
                                    <a className="test1" href="#test1" onClick={() => scrollToWithContainer()}>
                                        Scroll to element within container
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div>
                    <Element name="test1" className="element">
                        test 1
                    </Element>
                </div>

                <Element name="test2" className="element no-padding">
                    test 2
                </Element>

                <Element name="test3" className="element">
                    test 3
                </Element>

                <Element name="test4" className="element">
                    test 4
                </Element>

                <Element name="test5" className="element">
                    test 5
                </Element>

                <div id="anchor" className="element">
                    test 6 (anchor)
                </div>

                <ScrollLink
                    activeClass="active"
                    to="firstInsideContainer"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                    style={{ display: 'inline-block', margin: '20px' }}
                >
                    Go to first element inside container
                </ScrollLink>

                <ScrollLink
                    activeClass="active"
                    to="secondInsideContainer"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                    style={{ display: 'inline-block', margin: '20px' }}
                >
                    Go to second element inside container
                </ScrollLink>

                <Element
                    name="test7"
                    className="element"
                    id="containerElement"
                    style={{
                        position: 'relative',
                        height: '200px',
                        overflow: 'scroll',
                        marginBottom: '100px',
                    }}
                >
                    <Element
                        name="firstInsideContainer"
                        style={{
                            marginBottom: '200px',
                        }}
                    >
                        first element inside container
                    </Element>

                    <Element
                        name="secondInsideContainer"
                        style={{
                            marginBottom: '200px',
                        }}
                    >
                        second element inside container
                    </Element>
                </Element>

                <Element name="point" id="same" className="element">
                    Two links point to this
                </Element>

                <Element name="scroll-to-element" className="element">
                    Scroll to element
                </Element>

                <div
                    className="element"
                    id="scroll-container"
                    style={{
                        height: '200px',
                        overflow: 'scroll',
                        marginBottom: '100px',
                    }}
                >
                    <form>
                        <Element
                            name="scroll-container-first-element"
                            style={{
                                marginBottom: '200px',
                            }}
                        >
                            first element inside container
                        </Element>

                        <div
                            id="scroll-container-second-element"
                            style={{
                                marginBottom: '200px',
                            }}
                        >
                            second element inside container
                        </div>
                    </form>
                </div>

                <a onClick={scrollToTop}>To the top!</a>
            </div>
        </div>
    );
}
