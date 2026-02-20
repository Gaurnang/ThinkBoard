import {Ratelimit} from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//create a ratelimiter, that allows 5 request per 10 seconds
const ratelimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default ratelimiter;