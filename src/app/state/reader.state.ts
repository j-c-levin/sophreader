import { State, Action, StateContext, Selector } from '@ngxs/store';

export class ReaderStateModel {
    feeds: any[];
}
// tslint:disable:max-line-length
@State<ReaderStateModel>({
    name: 'Reader',
    defaults: {
        feeds: [
            {
                'title': 'Shop Contest: Create More Fortnite Mysteries, Winners!',
                'link': 'https://kotaku.com/shop-contest-create-more-fortnite-mysteries-winners-1827599798',
                'description': '<img src=\'https://i.kinja-img.com/gawker-media/image/upload/s--1AtOtH2m--/c_fit,fl_progressive,q_80,w_636/oggzx5vdxacine8nk77e.png\' /><p><em>Fornite <\/em>keeps upping the ante with its strange world developments from season to season, and<a href=\'https://kotaku.com/shop-contest-create-more-fortnite-mysteries-1827429272#_ga=2.131293638.836107552.1530927321-248556907.1526835855\' rel=\'nofollow\' onclick=\'window.ga(&#39;send&#39;, &#39;event&#39;, &#39;Embedded Url&#39;, &#39;Internal link&#39;, &#39;https://kotaku.com/shop-contest-create-more-fortnite-mysteries-1827429272#_ga=2.131293638.836107552.1530927321-248556907.1526835855&#39;, {metric25:1})\'>last week’s ‘Shop Contest<\/a> was all about adding even more mysteries to the pile.<br><\/p><p><a href=\'https://kotaku.com/shop-contest-create-more-fortnite-mysteries-winners-1827599798\'>Read more...<\/a><\/p>',
                'category': [
                    {
                        '@domain': '',
                        '#text': 'kotaku shop contest'
                    },
                    {
                        '@domain': '',
                        '#text': 'shop contest'
                    },
                    {
                        '@domain': '',
                        '#text': 'kotaku core'
                    }
                ],
                'pubDate': 'Sat, 14 Jul 2018 16:00:00 GMT',
                'guid': {
                    '@isPermaLink': 'false',
                    '#text': '1827599798'
                },
                'creator': 'Cameron Kunzelman'
            }
        ]
    }
})
export class ReaderState {
    @Selector()
    static getFeeds(state: ReaderStateModel) {
        return state.feeds;
    }
}
